import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBCW39IhkKFvjRJhtp86Hy0DXBVC_VKpPU",
  authDomain: "trend-cart.firebaseapp.com",
  projectId: "trend-cart",
  storageBucket: "trend-cart.appspot.com",
  messagingSenderId: "189222539253",
  appId: "1:189222539253:web:1dd164f41f78acff7c1abc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export{db,auth};