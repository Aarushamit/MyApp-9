import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyD4UKZb5UDgWEzaStAfiyI_-XFIrpbZ18M",
  authDomain: "laptopinfoapp-777f3.firebaseapp.com",
  projectId: "laptopinfoapp-777f3",
  storageBucket: "laptopinfoapp-777f3.appspot.com",
  messagingSenderId: "297731927775",
  appId: "1:297731927775:web:f542cfd92181053469436a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
