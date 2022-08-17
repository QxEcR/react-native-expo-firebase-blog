import { Button, StyleSheet, Text, View } from "react-native"
import { useState, useEffect } from "react"
import { Auth, db } from "../shared/firebase"
import { doc, deleteDoc } from "firebase/firestore"

const Article = ({ route, navigation }) => {
	const [isAuther, setIsAuther] = useState(false)

	const { title, content, id, autherID, auther } = route.params

	useEffect(() => {
		if (autherID == Auth.currentUser.uid) {
			setIsAuther(true)
		}
	}, [])

	const handleDelete = async () => {
		try {
			await deleteDoc(doc(db, "articles", id))
			navigation.navigate("Home")
		} catch (e) {
			console.error("Error deleting document: ", e)
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text>By: {auther}</Text>
			{isAuther && <Button title='Delete' onPress={handleDelete} />}
			<View style={styles.hr} />
			<Text style={styles.content}>{content}</Text>
		</View>
	)
}

export default Article

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		paddingTop: 20,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 20,
	},
	hr: {
		width: "100%",
		borderBottomColor: "black",
		borderBottomWidth: 1,
		marginVertical: 15,
	},
	content: {
		fontSize: 20,
	},
})
