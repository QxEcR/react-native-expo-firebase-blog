import { StyleSheet, View, FlatList } from "react-native"
import BottomBar from "../components/BottomBar"
import ArticleCard from "../components/ArticleCard"
import { useState, useEffect } from "react"
import { db } from "../shared/firebase"
import { collection, onSnapshot } from "firebase/firestore"

const Home = ({ navigation }) => {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		setArticles([])
		const unsubscribe = onSnapshot(
			collection(db, "articles"),
			(querySnapshot) => {
				const articles = []
				querySnapshot.forEach((doc) => {
					articles.push({
						id: doc.id,
						title: doc.data().title,
						content: doc.data().content,
						autherID: doc.data().autherID,
						auther: doc.data().auther,
					})
				})
				setArticles(articles)
			}
		)

		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<View style={styles.container}>
			<FlatList
				key={2}
				numColumns={2}
				contentContainerStyle={styles.contentContainer}
				data={articles}
				renderItem={({ item }) => (
					<ArticleCard
						title={item.title}
						id={item.id}
						content={item.content}
						autherID={item.autherID}
						auther={item.auther}
						navigation={navigation}
					/>
				)}
				keyExtractor={(item) => item.id}
			/>
			<BottomBar navigation={navigation} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 0,
		backgroundColor: "#F5FCFF",
	},
	contentContainer: {},
	footer: {
		height: 60,
	},
})
export default Home
