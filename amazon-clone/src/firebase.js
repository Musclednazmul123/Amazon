import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import { initializeApp } from 'firebase/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBEUOAbZ6O_DUNXGcaMXr3I756nDN0DvIc',
  authDomain: 'clone-5e595.firebaseapp.com',
  projectId: 'clone-5e595',
  storageBucket: 'clone-5e595.appspot.com',
  messagingSenderId: '1044001826395',
  appId: '1:1044001826395:web:41edb231d8ca157d87417e',
  measurementId: 'G-57YMR4CYNY',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
