import firebase from "firebase/compat/app"
import 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCFvm12u1U-o9VbxtXakhsNISuXInsNey8",
  authDomain: "project-x-c522f.firebaseapp.com",
  projectId: "project-x-c522f",
  storageBucket: "project-x-c522f.appspot.com",
  messagingSenderId: "601823524347",
  appId: "1:601823524347:web:f13b2ebde4de4dcef1c75e"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;