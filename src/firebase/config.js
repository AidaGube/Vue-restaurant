import firebase  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDiZ2T7LbKOFKTa-IdpemBIEdTumsQ0SWk",
  authDomain: "vue-logos.firebaseapp.com",
  projectId: "vue-logos",
  storageBucket: "vue-logos.appspot.com",
  messagingSenderId: "831171007159",
  appId: "1:831171007159:web:aa2b171569c648f8bbb332"
};


firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firestore, auth }
