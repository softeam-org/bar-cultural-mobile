import { StatusBar } from "expo-status-bar"
import React from "react"
import { SafeAreaView, View } from "react-native"
import "react-native-gesture-handler"
import Route from './src/Route/route'
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar/>
				<Route />
		</NavigationContainer>
	)
}


