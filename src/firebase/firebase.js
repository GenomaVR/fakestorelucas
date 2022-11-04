import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAgaXlj1lfp4kGFKh21EQEoqYjKKuip508",
  authDomain: "fakestore-coder.firebaseapp.com",
  projectId: "fakestore-coder",
  storageBucket: "fakestore-coder.appspot.com",
  messagingSenderId: "255689662410",
  appId: "1:255689662410:web:0b2e99167b04f82756f933"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);