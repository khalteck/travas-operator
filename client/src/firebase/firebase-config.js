import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNE82_uUVXmTaGWhqh30e3j9CCAh-NmuY",
  authDomain: "travas-operator.firebaseapp.com",
  projectId: "travas-operator",
  storageBucket: "travas-operator.appspot.com",
  messagingSenderId: "617802269096",
  appId: "1:617802269096:web:31bc4c5c1a4104dbfb9d9d",
  measurementId: "G-DMNBGVDMJ4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
