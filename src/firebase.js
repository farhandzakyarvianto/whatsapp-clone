import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1GcE4tZKpw4DyVgprPgvL_2rN5qfWxEI",
    authDomain: "whatsapp-clone-fd.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-fd.firebaseio.com",
    projectId: "whatsapp-clone-fd",
    storageBucket: "whatsapp-clone-fd.appspot.com",
    messagingSenderId: "1035247704479",
    appId: "1:1035247704479:web:531fc615d39e88322d85aa",
    measurementId: "G-1823BCMM73",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
