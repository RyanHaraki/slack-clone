import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-VHfWvcFUNHH703NFp2XruzEskcnDZsE",
  authDomain: "slack-clone-f6513.firebaseapp.com",
  projectId: "slack-clone-f6513",
  storageBucket: "slack-clone-f6513.appspot.com",
  messagingSenderId: "202234818122",
  appId: "1:202234818122:web:9f4877c2424497facf40b3",
};

//Firebase initialization to be used across app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Firestore setup
const db = firebaseApp.firestore();

//Google authentication setup
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
