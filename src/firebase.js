// import firebase from "firebase";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyCOmCDfaHcVwQyzI5KJXs9-X3HIJbbALWY",
    authDomain: "netflix-messenger-clone.firebaseapp.com",
    projectId: "netflix-messenger-clone",
    storageBucket: "netflix-messenger-clone.appspot.com",
    messagingSenderId: "382150557087",
    appId: "1:382150557087:web:ae9b388c7451ed749411aa",
    measurementId: "G-LS5NT4ETDR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();

  export { auth };
  export default db;