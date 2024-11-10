import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBjTEWBt4bNWN1NqonA7tijwG-heEXnUls",
  authDomain: "craft-learner.firebaseapp.com",
  projectId: "craft-learner",
  storageBucket: "craft-learner.firebasestorage.app",
  messagingSenderId: "375739522026",
  appId: "1:375739522026:web:83f013c3de1e445b99f093"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };