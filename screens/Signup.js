import { StyleSheet, View, TextInput, Button, Text } from "react-native"
import { useState, useEffect } from "react"
import { Auth } from "../shared/firebase"
import { signup } from "../shared/auth"

const Signup = ({ navigation }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	useEffect(() => {
		if (Auth.currentUser) {
			navigation.navigate("Home")
		}
	}, [])

	const handleSignup = () => {
		signup(email, password, navigation)
	}

	return (
		<View style={styles.mainContainer}>
			<View style={styles.formContainer}>
				<Text style={styles.inputLabel}>Email:</Text>
				<TextInput
					style={styles.input}
					placeholder='Email'
					onChangeText={(text) => setEmail(text)}
				/>
				<Text style={styles.inputLabel}>Password:</Text>
				<TextInput
					style={styles.input}
					placeholder='Password'
					secureTextEntry={true}
					onChangeText={(text) => setPassword(text)}
				/>
				<Button title='Sign up' onPress={handleSignup} />
			</View>
		</View>
	)
}

export default Signup

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	formContainer: {
		flex: 1,
		justifyContent: "center",
		width: "60%",
	},
	inputLabel: {
		fontSize: 16,
		marginBottom: 5,
	},
	input: {
		height: 40,
		width: "100%",
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		marginBottom: 20,
	},
})
