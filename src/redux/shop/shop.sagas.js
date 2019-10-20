import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ShopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapshopToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure,fetchCollectionsSuccess } from './shop.actions';

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collections = yield call(convertCollectionsSnapshopToMap, snapshot);
        yield put(fetchCollectionsSuccess(collections));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    )
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ])
}