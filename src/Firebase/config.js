import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3TnVY93UH-rx-8fbvkavznudzyoLVPHI",
  authDomain: "canetepamelareact.firebaseapp.com",
  projectId: "canetepamelareact",
  storageBucket: "canetepamelareact.appspot.com",
  messagingSenderId: "1067019216093",
  appId: "1:1067019216093:web:84ec8226947890ab3e6734"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default firebaseConfig;