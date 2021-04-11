import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCXjLBoKU3jjB94ekM_QQkaTvnZ1NIYxWk",
    authDomain: "panza-4e723.firebaseapp.com",
    databaseURL: "https://panza-4e723.firebaseio.com",
    projectId: "panza-4e723",
    storageBucket: "panza-4e723.appspot.com",
    messagingSenderId: "972984492410",
    appId: "1:972984492410:web:e730b82a1d626492fc76c3",
    measurementId: "G-CM2BKGYHTY"
  };

  const firebaseConn = firebase.initializeApp(firebaseConfig);
  const auth = firebaseConn.auth()

  export {auth}
