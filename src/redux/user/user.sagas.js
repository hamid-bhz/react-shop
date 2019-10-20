import { takeLatest, put, call, all } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import { googleSignInFailure, googleSignInSuccess } from './user.actions';
import { auth, googleProvider, createUserProfile } from '../../firebase/firebase.utils';

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfile, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userRef.id, ...userSnapshot.data() }))
    } catch (error) {
        yield put(googleSignInFailure(error.message))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export default function* userSagas() {
    yield all([
        call(onGoogleSignInStart)
    ])
}