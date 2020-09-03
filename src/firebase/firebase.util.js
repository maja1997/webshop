import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCHDb13hi8FEJSmcMNhbG-IOZfgzA-uQi8',
  authDomain: 'e-commerce-8a70e.firebaseapp.com',
  databaseURL: 'https://e-commerce-8a70e.firebaseio.com',
  projectId: 'e-commerce-8a70e',
  storageBucket: 'e-commerce-8a70e.appspot.com',
  messagingSenderId: '837530584646',
  appId: '1:837530584646:web:506430adf1232da1232c47',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      // todo
    }
  }
  // eslint-disable-next-line consistent-return
  return userRef;
};
