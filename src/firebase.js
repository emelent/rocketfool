import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC_t3eW7kHHvi_hcDKwX_jvx1CA2IpeVb4",
  authDomain: "rocketfool-7b3be.firebaseapp.com",
  databaseURL: "https://rocketfool-7b3be.firebaseio.com",
  storageBucket: "rocketfool-7b3be.appspot.com",
  messagingSenderId: "751656486713"
};

firebase.initializeApp(config);

export default firebase;
