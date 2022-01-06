import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCTbaH6wNBaEm7jmiFdnhxEZjGWKbYoPv0',
  authDomain: 'disney-8ce2d.firebaseapp.com',
  projectId: 'disney-8ce2d',
  storageBucket: 'disney-8ce2d.appspot.com',
  messagingSenderId: '506884464871',
  appId: '1:506884464871:web:6ce14d8031f681f6aa8242',
  measurementId: 'G-HZHLMYL5WJ',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
