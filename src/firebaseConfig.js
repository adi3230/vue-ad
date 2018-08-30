import firebase from 'firebase'
import 'firebase/firestore'

//Firebase init goes here
var config = {
    apiKey: "AIzaSyAWQCAq5eAoFvQrRIIoJ8dSrvbyX_kaO50",
    authDomain: "vue-ad-db1ff.firebaseapp.com",
    databaseURL: "https://vue-ad-db1ff.firebaseio.com",
    projectId: "vue-ad-db1ff",
    storageBucket: "vue-ad-db1ff.appspot.com",
    messagingSenderId: "333523055682"
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
