import { StyleSheet, Text, Pressable } from "react-native"
import React from "react"

const ArticleCard = ({ title, id, content, autherID, auther, navigation }) => {
	const handleOnPress = () => {
		navigation.navigate("Article", {
			id,
			title,
			content,
			autherID,
			auther,
		})
	}

	return (
		<Pressable style={styles.mainContainer} onPress={handleOnPress}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{content}</Text>
			<Text style={styles.description}>{id}</Text>
		</Pressable>
	)
}

export default ArticleCard

const styles = StyleSheet.create({
	mainContainer: {
		width: "45%",
		height: 200,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#ddd",
		backgroundColor: "#fff",
		margin: 10,
		padding: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#000",
		marginBottom: 7,
	},
	description: {
		fontSize: 14,
		color: "#000",
	},
})
