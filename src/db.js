import * as firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBJErtAQ1wiuhm1emxdHuRqbIZlLeeNFY8',
  authDomain: 'task-manager-96685.firebaseapp.com',
  databaseURL: 'https://task-manager-96685.firebaseio.com'
})

export default app.database()
