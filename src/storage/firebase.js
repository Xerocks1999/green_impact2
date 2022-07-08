import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCAbpVXnNaRlLNxxafY9Jfgy9W1oCBdmUo",
    authDomain: "green-impact-f2a41.firebaseapp.com",
    projectId: "green-impact-f2a41",
    storageBucket: "green-impact-f2a41.appspot.com",
    messagingSenderId: "319124302047",
    appId: "1:319124302047:web:6ee90d512186428509e16a",
    measurementId: "G-688NPLB56B"
};

firebase.initializeApp(firebaseConfig)

export default firebase;