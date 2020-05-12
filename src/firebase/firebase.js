import firebase from "firebase/app";
import "firebase/storage";


var firebaseConfig = {
  apiKey: "AIzaSyCCTgcoi9I-ls0A3EBSa8F_ODAwIzSp8wg",
  authDomain: "ttg-project-92785.firebaseapp.com",
  databaseURL: "https://ttg-project-92785.firebaseio.com",
  projectId: "ttg-project-92785",
  storageBucket: "ttg-project-92785.appspot.com",
  messagingSenderId: "33833265257",
  appId: "1:33833265257:web:10213e539c1a2aee779af8",
  measurementId: "G-J4N1JZRF3D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

//analytics is optional for this tutoral
// firebase.analytics();

export { storage, firebase as default };
