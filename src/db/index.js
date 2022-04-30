import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const db = firebase
  .initializeApp(
    {
      apiKey: "AIzaSyDv1kDlJ8rQHMthZhIzgwJWyr9XkOz-4Xw",
      authDomain: "eduservices-90bc7.firebaseapp.com",
      projectId: "eduservices-90bc7",
      storageBucket: "eduservices-90bc7.appspot.com",
      messagingSenderId: "470880507794",
      appId: "1:470880507794:web:5889862a1d97a61ab2d34b",
      measurementId: "G-74MDQM9WJH"
    }
  )
  .firestore()

export default db

const { Timestamp } = firebase.firestore
export { Timestamp }