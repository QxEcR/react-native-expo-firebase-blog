import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyDSInznzUV2LrLrb3gp9XpPyfDHdlZd08E",
	authDomain: "blog-f4d34.firebaseapp.com",
	projectId: "blog-f4d34",
	storageBucket: "blog-f4d34.appspot.com",
	messagingSenderId: "728365494870",
	appId: "1:728365494870:web:0cfe6c574dd5833dba81f7",
}

export const app = initializeApp(firebaseConfig)
export const Auth = getAuth(app)
export const db = getFirestore(app)
