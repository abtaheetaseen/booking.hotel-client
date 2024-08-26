import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD832yeP_ZZoPwoJ-kZkVGKXppxuQsB1Es",
  authDomain: "bookinghotel-3fde9.firebaseapp.com",
  projectId: "bookinghotel-3fde9",
  storageBucket: "bookinghotel-3fde9.appspot.com",
  messagingSenderId: "1040371380009",
  appId: "1:1040371380009:web:f545d3b4eab8d1e77bd138"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;