import firebase from 'firebase';
import uuid from 'uuid/v4';

const config = {
    apiKey: "AIzaSyBjlwRwLareXi0Zhcd377HNZhkM9anlOko",
    authDomain: "travelbybus-dd7f4.firebaseapp.com",
    databaseURL: "https://travelbybus-dd7f4.firebaseio.com",
    projectId: "travelbybus-dd7f4",
    storageBucket: "travelbybus-dd7f4.appspot.com",
    messagingSenderId: "662279610439"

};

firebase.initializeApp(config);

const database = firebase.database()

export default database

export const addTableToFirebase = (task) => {

    const id = uuid()

    database.ref(`/${id}`).set({

        task, id

    })

}

export const removeTableFromFirebase = (id) => {

    database.ref(`/${id}`).remove()

}