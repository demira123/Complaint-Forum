import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
  apiKey: "AIzaSyBe8-pF_XReIC4nBPcB-KslM-5R_RsKxPA",
  authDomain: "complaint-forum-3ad3c.firebaseapp.com",
  projectId: "complaint-forum-3ad3c",
  storageBucket: "complaint-forum-3ad3c.appspot.com",
  messagingSenderId: "632142139687",
  appId: "1:632142139687:web:29dc80777a8c651d401902"
};


  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

