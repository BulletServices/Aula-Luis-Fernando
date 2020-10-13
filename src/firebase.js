import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDGvcF5t83_5y8me2qQOwsUiIdNojgv-PM",
  authDomain: "notes-b8d0f.firebaseapp.com",
  databaseURL: "https://notes-b8d0f.firebaseio.com",
  projectId: "notes-b8d0f",
  storageBucket: "notes-b8d0f.appspot.com",
  messagingSenderId: "34357437486",
  appId: "1:34357437486:web:a8608d40b402ce67d16bbf",
  measurementId: "G-X83G6403D0"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
