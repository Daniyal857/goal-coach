import * as firebase from 'firebase';

const config = {
     // Initialize Firebase
    apiKey: "AIzaSyDZp0eM2iu89edrK5NRgAApilV5y5TEkSo",
    authDomain: "goal-coach-b9b52.firebaseapp.com",
    databaseURL: "https://goal-coach-b9b52.firebaseio.com",
    projectId: "goal-coach-b9b52",
    storageBucket: "",
    messagingSenderId: "466926510590"
}

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
