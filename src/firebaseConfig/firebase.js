// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZsopacNk_obyUwuaqFR5x1u-zk4ncMx4",
  authDomain: "crud-fire-react-cba82.firebaseapp.com",
  databaseURL: "https://crud-fire-react-cba82-default-rtdb.firebaseio.com",
  projectId: "crud-fire-react-cba82",
  storageBucket: "crud-fire-react-cba82.appspot.com",
  messagingSenderId: "655490194173",
  appId: "1:655490194173:web:45a55e59f37104b8b0bc94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)