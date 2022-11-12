import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
   apiKey: "AIzaSyDIdSpACQbc1-_JICLQ6gRjl_YrX25eiOA",
  authDomain: "mini-diary-organization.firebaseapp.com",
  databaseURL: "https://mini-diary-organization-default-rtdb.firebaseio.com",
  projectId: "mini-diary-organization",
  storageBucket: "mini-diary-organization.appspot.com",
  messagingSenderId: "542075449644",
  appId: "1:542075449644:web:26133a6448c78f79927c89",
};

const app = firebase.initializeApp(config);
const db = firebase.firestore(app);

export default db;
