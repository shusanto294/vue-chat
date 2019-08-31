import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCp52mboA2sIomnEBEN3rx2H1J5xrR3x3A",
    authDomain: "vue-chat-a46e7.firebaseapp.com",
    databaseURL: "https://vue-chat-a46e7.firebaseio.com",
    projectId: "vue-chat-a46e7",
    storageBucket: "",
    messagingSenderId: "399497268666",
    appId: "1:399497268666:web:c09eff2af153ad31"
  };

// Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()