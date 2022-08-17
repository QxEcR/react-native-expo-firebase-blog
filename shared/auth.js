import { Auth } from "./firebase"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth"

export const login = (email, password, navigation) => {
	signInWithEmailAndPassword(Auth, email, password)
		.then((userCredential) => {
			navigation.navigate("Home")
		})
		.catch((error) => {
			alert(error.message)
		})
}
export const signup = (email, password, navigation) => {
	createUserWithEmailAndPassword(Auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user
			navigation.navigate("Home")
		})
		.catch((error) => {
			if (error.code === "auth/email-already-in-use") {
				login(email, password, navigation)
			} else {
				alert(error.message)
			}
		})
}

export const signout = (navigation) => {
	signOut(Auth)
		.then(() => {
			navigation.navigate("Home")
		})
		.catch((error) => {})
}
