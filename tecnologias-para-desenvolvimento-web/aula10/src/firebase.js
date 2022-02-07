// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkzZV3e4XTkCZRK5roxm5gAjG2ytvG5yU",
    authDomain: "tec-desenvolvimento-web.firebaseapp.com",
    projectId: "tec-desenvolvimento-web",
    storageBucket: "tec-desenvolvimento-web.appspot.com",
    messagingSenderId: "281105029889",
    appId: "1:281105029889:web:5898fb094a0af07fd49900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};
