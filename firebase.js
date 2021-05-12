import  firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCycSzql5GxdEJ0wtl9jweSlW5CLPPqgqk",
    authDomain: "chat-app-b7795.firebaseapp.com",
    projectId: "chat-app-b7795",
    storageBucket: "chat-app-b7795.appspot.com",
    messagingSenderId: "509460516338",
    appId: "1:509460516338:web:6808578980e8df44f52f6b"
  };

  let app;
if (firebase.apps.length==0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };