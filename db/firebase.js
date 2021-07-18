// Your web app's Firebase configuration
import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {

    apiKey: "AIzaSyDKBUliyV07O2sCWv7IgSYGy7HWsPOOLTs",
    authDomain: "forms-230d1.firebaseapp.com",
    projectId: "forms-230d1",
    storageBucket: "forms-230d1.appspot.com",
    messagingSenderId: "259762371630",
    appId: "1:259762371630:web:71bdfdbfc7f296cd9cb3bf"
};

// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);

