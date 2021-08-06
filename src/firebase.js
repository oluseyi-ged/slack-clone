import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyClSeoxvOzpiNNt-qOBhPuU0wzGHLX-5WM",
  authDomain: "slack-clone-54cb9.firebaseapp.com",
  projectId: "slack-clone-54cb9",
  storageBucket: "slack-clone-54cb9.appspot.com",
  messagingSenderId: "657272414063",
  appId: "1:657272414063:web:40567f42d1db27ad3b129a",
  measurementId: "G-XCQXSRB263",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
