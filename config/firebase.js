import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARN0YQn0--qL6eLi70QECRhw0_ayyuON4",
  authDomain: "fir-example-8ef3b.firebaseapp.com",
  databaseURL: "https://fir-example-8ef3b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-example-8ef3b",
  storageBucket: "fir-example-8ef3b.appspot.com",
  messagingSenderId: "1035136076750",
  appId: "1:1035136076750:web:0191a05f523a87b4a8f99f"
};


const app = initializeApp(firebaseConfig);

export const authFirebase = getAuth(app)
export const databaseFirebase = getDatabase(app)
export const storage = getStorage(app)