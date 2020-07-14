import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBldlW4OUKWe3pNPb_Q-H2Rxg64YRH21c0',
  authDomain: 'e-commerce-db-5b86a.firebaseapp.com',
  databaseURL: 'https://e-commerce-db-5b86a.firebaseio.com',
  projectId: 'e-commerce-db-5b86a',
  storageBucket: 'e-commerce-db-5b86a.appspot.com',
  messagingSenderId: '927457441637',
  appId: '1:927457441637:web:bcb88c9b34d4251f25d38c',
  measurementId: 'G-PCXETYBHXF',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // sad proveravamo da li mzd postoji user
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

export default firebase;
