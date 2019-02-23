import firebase from 'firebase'

const config={
    apiKey: "AIzaSyAbH-P_CXsBDi-gWVsilZt4aDZyjUdhVos",
    authDomain: "dndatabase-fae1b.firebaseapp.com",
    databaseURL: "https://dndatabase-fae1b.firebaseio.com",
    projectId: "dndatabase-fae1b",
    storageBucket: "dndatabase-fae1b.appspot.com",
    messagingSenderId: "845329967400"
};
firebase.initializeApp(config);
export default firebase;