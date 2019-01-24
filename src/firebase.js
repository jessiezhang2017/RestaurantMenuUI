import firebase from 'firebase';

const config = {
  // apiKey: "AIzaSyDm6OrLeVF3mSl6XuhYuu_vrrkg1CaaD8c",
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "restaurant-menu-ui.firebaseapp.com",
  databaseURL: "https://restaurant-menu-ui.firebaseio.com",
  projectId: "restaurant-menu-ui",
  storageBucket: "restaurant-menu-ui.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_ID,
  // messagingSenderId: "226933753045",
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
