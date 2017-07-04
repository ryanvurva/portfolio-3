import * as firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCyJqpMLSdEF0oEUhq4z4vfTLZ3zR6pZCY',
  authDomain: 'chatapp-11c29.firebaseapp.com',
  databaseURL: 'https://chatapp-11c29.firebaseio.com'
})

export default app.database()
