import firebase from 'firebase';
const Config = {
    apiKey: "AIzaSyDYcHu7gViOEtC3ZQjHGsLZzslLH3avJxc",
    authDomain: "theinitiatorsgame.firebaseapp.com",
    databaseURL: "https://theinitiatorsgame.firebaseio.com",
    projectId: "theinitiatorsgame",
    storageBucket: "theinitiatorsgame.appspot.com",
    messagingSenderId: "811314273977",
    appId: "1:811314273977:web:0c7c1f69cb66a5af970568",
    measurementId: "G-1KYT3G29CM"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  export const config={...Config};
  export default firebase;
  