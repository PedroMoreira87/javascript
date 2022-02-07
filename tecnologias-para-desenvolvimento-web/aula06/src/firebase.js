import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkzZV3e4XTkCZRK5roxm5gAjG2ytvG5yU",
    authDomain: "tec-desenvolvimento-web.firebaseapp.com",
    databaseURL: "https://tec-desenvolvimento-web-default-rtdb.firebaseio.com",
    projectId: "tec-desenvolvimento-web",
    storageBucket: "tec-desenvolvimento-web.appspot.com",
    messagingSenderId: "281105029889",
    appId: "1:281105029889:web:5898fb094a0af07fd49900"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
