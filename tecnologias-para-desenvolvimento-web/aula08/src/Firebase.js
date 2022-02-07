import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDz-7zR9-cF8m7e3KfYlospOOqMaI-FRvA",
    authDomain: "metodosquantitativoscomputacao.firebaseapp.com",
    projectId: "metodosquantitativoscomputacao",
    storageBucket: "metodosquantitativoscomputacao.appspot.com",
    messagingSenderId: "906065750614",
    appId: "1:906065750614:web:9e5706899b4c2c424be9f7"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
