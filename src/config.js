const FirebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY_FIREBASE,
    authDomain: process.env.REACT_APP_AUTHDOMAIN_FIREBASE,
    databaseURL: process.env.REACT_APP_DATABASE_FIREBASE,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STOREBUCKET_FIREBASE,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID_FIREBASE,
    appId: process.env.REACT_APP_APPID_FIREBASE,
    measurementId: process.env.REACT_APP_MEASUREMENTID_FIREBASE,
};

export default FirebaseConfig;