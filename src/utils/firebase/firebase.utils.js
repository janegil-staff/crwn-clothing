import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtTl1f0uJpzL6NNU3ROferPmuwpfYUHr0",
  authDomain: "crwn-clothing-db-fdc71.firebaseapp.com",
  projectId: "crwn-clothing-db-fdc71",
  storageBucket: "crwn-clothing-db-fdc71.appspot.com",
  messagingSenderId: "638158041591",
  appId: "1:638158041591:web:e6b560792a04f38532fef2",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  promt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);