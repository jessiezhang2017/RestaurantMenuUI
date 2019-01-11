import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDm6OrLeVF3mSl6XuhYuu_vrrkg1CaaD8c",
  authDomain: "restaurant-menu-ui.firebaseapp.com",
  databaseURL: "https://restaurant-menu-ui.firebaseio.com",
  projectId: "restaurant-menu-ui",
  storageBucket: "restaurant-menu-ui.appspot.com",
  messagingSenderId: "226933753045"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
