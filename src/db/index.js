import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const db = firebase
  .initializeApp(
    {
      apiKey: "AIzaSyCdL0KfEMFuytHwnPIn5JG-xDztE4_6iLs",
      authDomain: "eduservices-c9ea2.firebaseapp.com",
      projectId: "eduservices-c9ea2",
      storageBucket: "eduservices-c9ea2.appspot.com",
      messagingSenderId: "420758571242",
      appId: "1:420758571242:web:5f5d8807070e7506c1af93",
      measurementId: "G-K170JVYTJ3"
    }
  )
  .firestore()

export default db

const { Timestamp } = firebase.firestore
export { Timestamp }