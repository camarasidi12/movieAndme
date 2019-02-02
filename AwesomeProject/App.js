// App.js

import React from 'react'
import Search from './Components/Search'
import Navigation from './Navigation/Navigation.js'
import * as firebase from 'firebase';


import {createAppContainer } from 'react-navigation'

const AppContainer = createAppContainer(Navigation);


const config = {
  apiKey: "AIzaSyDKrHcCQ_EA8hrFqOMcba1JTew7fuIdG2c",
  authDomain: "kharancompe.firebaseapp.com",
  databaseURL: "https://kharancompe.firebaseio.com",
  projectId: "kharancompe",
  storageBucket: "kharancompe.appspot.com",
  messagingSenderId: "1691935399"
};
firebase.initializeApp(config);
const database = firebase.database()
export default class App extends React.Component {
  writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/').set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
  
  fireBaseUp() {
    try {
      console.log( 'trying Uploaded a blob or file!');
      const storageRef = firebase.storage().ref();
      const mountainImagesRef = storageRef.child('image/Bah.mp3');
       const jput = mountainImagesRef.putFile("./Bah.mp3").then(function(snapshot) {
        })
    } catch (error) {
      console.log("errrrorrror "+error.message)
    }
   
      
      
  }
  componentDidMount(){
    try {
     // this.fireBaseUp()
      //this.writeUserData("1","sidi","camarasidi12@gmail.com","image")
     // firebase.storage()
      //.ref('/image/Bah')
      //.putFile('./Bah.mp3')
     // .then(uploadedFile => {
     //   console.log("SUCCESS ")
      //})
     // .catch(err => {
      //  console.log("txoo "+err)
     // });
    } catch (error) {
      console.log("CATTTT2 "+error)
    }
  }
  render() { console.log("hshhdhdhd")
      return (
      <Provider store={Store}>
         <AppContainer />
      </Provider>
    )
  }
}
