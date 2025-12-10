'use client';

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'studio-8007376893-9d42f',
  appId: '1:648426204232:web:921a152bc0260cd9aa7c7d',
  apiKey: 'AIzaSyCrDBuq0zT8O2L3z2gA6-54Fd_GjWEaBug',
  authDomain: 'studio-8007376893-9d42f.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '648426204232',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
