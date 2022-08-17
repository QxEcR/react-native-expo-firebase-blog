import { StyleSheet, Text, View, TextInput, Button } from "react-native"
import { useState, useEffect } from "react"
import { Auth } from "../shared/firebase"
import { db } from "../shared/firebase"
import { collection, addDoc } from "firebase/firestore"

const CreateArticle = ({ navigation }) => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	useEffect(() => {
		if (!Auth.currentUser) {
			navigation.navigate("Home")
		}
	}, [])

	const handleSubmit = async () => {
		try {
			const docRef = await addDoc(collection(db, "articles"), {
				title: title,
				content: content,
				autherID: Auth.currentUser.uid,
				auther: Auth.currentUser.email,
			})
			console.log("Document written with ID: ", docRef.id)
			setTitle("")
			navigation.navigate("Home")
		} catch (e) {
			console.error("Error adding document: ", e)
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.formContainer}>
				<Text style={styles.inputLabel}>Title:</Text>
				<TextInput
					style={styles.input}
					placeholder='Title'
					onChangeText={(text) => setTitle(text)}
				/>
				<Text style={styles.inputLabel}>Content:</Text>
				<TextInput
					style={[styles.input, styles.largeInput]}
					placeholder='Content'
					multiline={true}
					numberOfLines={10}
					onChangeText={(text) => setContent(text)}
				/>
				<Button title='Create' onPress={handleSubmit} />
			</View>
		</View>
	)
}

export default CreateArticle

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
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
	largeInput: {
		height: 200,
	},
})
