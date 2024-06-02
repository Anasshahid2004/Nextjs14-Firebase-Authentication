import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "smit-batch-10-6fd8f.firebaseapp.com",
  projectId: "smit-batch-10-6fd8f",
  storageBucket: "smit-batch-10-6fd8f.appspot.com",
  messagingSenderId: "158541495135",
  appId: "1:158541495135:web:26b043a011d0902cdd94ea",
  measurementId: "G-3DVCV269BC"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };
