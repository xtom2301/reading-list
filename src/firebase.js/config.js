import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCggi8PGzToHy1JooKdGLklmHwtFfGBRdM',
  authDomain: 'reading-list-d5e94.firebaseapp.com',
  projectId: 'reading-list-d5e94',
  storageBucket: 'reading-list-d5e94.appspot.com',
  messagingSenderId: '330591464068',
  appId: '1:330591464068:web:7ba0c6df7e808c4b4db0d1',
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
