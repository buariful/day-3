// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmyPfVFa2I2F5sCw57yBvhawA0PTRoX80",
    authDomain: "scissorhand-1b74c.firebaseapp.com",
    projectId: "scissorhand-1b74c",
    storageBucket: "scissorhand-1b74c.appspot.com",
    messagingSenderId: "917100345440",
    appId: "1:917100345440:web:cd79ffb32a7b2e894d6b05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;