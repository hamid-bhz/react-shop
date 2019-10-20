import { ShopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapshopToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collections => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionsStart())

        collectionRef.get().then(snapshop => {
            const collections = convertCollectionsSnapshopToMap(snapshop);
            dispatch(fetchCollectionsSuccess(collections));
        }).catch(error => {
            dispatch(fetchCollectionsFailure(error.message))
        })
    }
}

// export const updateCollections = collections => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collections
// })