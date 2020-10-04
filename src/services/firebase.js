import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyCWBMhmI-lFBlqp60WXt11-ZoZ-R5zQH4o',
  authDomain: 'germanentrena-e78ad.firebaseapp.com',
  databaseURL: 'https://germanentrena-e78ad.firebaseio.com',
  projectId: 'germanentrena-e78ad',
  storageBucket: 'germanentrena-e78ad.appspot.com',
  messagingSenderId: '770387744787',
  appId: '1:770387744787:web:7129b84bf8d9c3873e47e6'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
