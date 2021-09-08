import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyBgeKDWjsuwNNc7wIKBgNvH_mT1291Cw_s",
  authDomain: "auth-production-1234.firebaseapp.com",
  projectId: "auth-production-1234",
  storageBucket: "auth-production-1234.appspot.com",
  messagingSenderId: "114451944332",
  appId: "1:114451944332:web:9a4256abdc0d47599fbca9"
})

export const auth  = app.auth();
export default app