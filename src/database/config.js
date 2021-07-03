import * as firebase from 'firebase';

var firebaseConfig = {
apiKey: "AIzaSyCU5Z4e5eOALyNlAvCIAXC5WrMIU3OgYB8",
authDomain: "photowall-43135.firebaseapp.com",
databaseURL: "https://photowall-43135-default-rtdb.firebaseio.com",
projectId: "photowall-43135",
storageBucket: "photowall-43135.appspot.com",
messagingSenderId: "960163431374",
appId: "1:960163431374:web:6b088868459d61154ee19f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export {database}