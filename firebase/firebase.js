import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBF6WfIH0I7d5IqI07n1jTkxhgs1xZyg-8",
    authDomain: "anime-project-10a75.firebaseapp.com",
    projectId: "anime-project-10a75",
    storageBucket: "anime-project-10a75.appspot.com",
    messagingSenderId: "266075741553",
    appId: "1:266075741553:web:640e0b6bc689d52f67aad0",
    measurementId: "G-PMCVBP3F5B"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)