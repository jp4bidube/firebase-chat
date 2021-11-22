import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdUKVYV4izc5Q_m1pe8nvQlfYxdKxdpqw",
  authDomain: "projeto-web-av2.firebaseapp.com",
  projectId: "projeto-web-av2",
  storageBucket: "projeto-web-av2.appspot.com",
  messagingSenderId: "1044382335239",
  appId: "1:1044382335239:web:de5755f1c87e09691a45a2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
