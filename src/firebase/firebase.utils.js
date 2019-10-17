import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAbEbhPEGE8UczuyvJe3pP4PKqFCCNliVA",
    authDomain: "shop-5ea10.firebaseapp.com",
    databaseURL: "https://shop-5ea10.firebaseio.com",
    projectId: "shop-5ea10",
    storageBucket: "shop-5ea10.appspot.com",
    messagingSenderId: "740487975186",
    appId: "1:740487975186:web:ad1237a3485bc7b71b23cb",
    measurementId: "G-9G18BKJGYY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;