import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions'
import "firebase/storage";  
import "firebase/analytics"; 

const config = {
    apiKey: process.env.REACT_APP_APIKEY_FIREBASE,
    authDomain: process.env.REACT_APP_AUTHDOMAIN_FIREBASE,
    databaseURL: process.env.REACT_APP_DATABASE_FIREBASE,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STOREBUCKET_FIREBASE,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID_FIREBASE,
    appId: process.env.REACT_APP_APPID_FIREBASE,
    measurementId: process.env.REACT_APP_MEASUREMENTID_FIREBASE,
};

const Firebase = firebase.initializeApp(config);
const Db = Firebase.firestore();
const Functions = Firebase.functions();
const Auth = firebase.auth();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const GithubProvider = new firebase.auth.GithubAuthProvider();
 

export { Auth, Db, Functions, GoogleProvider, GithubProvider }
export default Firebase;