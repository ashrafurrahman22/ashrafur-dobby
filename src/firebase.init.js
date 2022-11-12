// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCStoB9kCtM263IU7W8HLv7AaXG_t69rRc",
  authDomain: "dubby-ads.firebaseapp.com",
  projectId: "dubby-ads",
  storageBucket: "dubby-ads.appspot.com",
  messagingSenderId: "424407509360",
  appId: "1:424407509360:web:71d56e72c931c03bb547b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;