import firebase from 'firebase'

let firebaseConfig = {
  apiKey: "AIzaSyD6Cpbh6FBv5JzmNuLmui-AYDqpSoYqPPs",
  authDomain: "sage-health-fa5c5.firebaseapp.com",
  databaseURL: "https://sage-health-fa5c5.firebaseio.com",
  projectId: "sage-health-fa5c5",
  storageBucket: "sage-health-fa5c5.appspot.com",
  messagingSenderId: "300495154456",
  appId: "1:300495154456:web:20022d1df349df4baac26d"
};

  // Initialize Firebase
  const fire =firebase.initializeApp(firebaseConfig);

 export default fire