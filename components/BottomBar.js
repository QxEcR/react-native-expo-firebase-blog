import { Button, StyleSheet, View } from "react-native"
import { signout } from "../shared/auth"
import { Auth } from "../shared/firebase"
import { useState, useEffect } from "react"

const BottomBar = ({ navigation }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	useEffect(() => {
		Auth.onAuthStateChanged((user) => {
			if (user) {
				setIsAuthenticated(true)
			} else {
				setIsAuthenticated(false)
			}
		})
	}, [])

	const handleSignout = () => {
		signout(navigation)
	}

	return (
		<View style={styles.container}>
			{isAuthenticated ? (
				<>
					<Button style={styles.barBtn} title='My Blogs' onPress={() => {}} />
					<Button
						style={styles.barBtn}
						title='New Blog'
						onPress={() => {
							navigation.navigate("CreateArticle")
						}}
					/>
					<Button
						style={styles.barBtn}
						title='Logout'
						onPress={handleSignout}
					/>
				</>
			) : (
				<>
					<Button
						style={styles.barBtn}
						title='Log in'
						onPress={() => {
							navigation.navigate("Login")
						}}
					/>
					<Button
						style={styles.barBtn}
						title='Sign up'
						onPress={() => {
							navigation.navigate("Signup")
						}}
					/>
				</>
			)}
		</View>
	)
}

export default BottomBar

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: 60,
		justifyContent: "space-around",
		alignItems: "center",
		borderTopWidth: 1,
		borderTopColor: "#ccc",
	},
	barBtn: {
		width: "33.33%",
		height: "100%",
		backgroundColor: "#ccc",
	},
})
