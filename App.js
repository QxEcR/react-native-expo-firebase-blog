import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import Signup from "./screens/Signup"
import Login from "./screens/Login"
import CreateArticle from "./screens/CreateArticle"
import Article from "./screens/Article"

const Stack = createNativeStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Signup' component={Signup} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='CreateArticle' component={CreateArticle} />
				<Stack.Screen name='Article' component={Article} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
