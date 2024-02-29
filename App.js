import { StatusBar } from "expo-status-bar"
import React from "react"
import { SafeAreaView } from "react-native"
import "react-native-gesture-handler"
import Route from './src/Route/route'
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
	
	return (
		<NavigationContainer>
			<StatusBar/>
			<SafeAreaView style={{flex:1,marginTop:25}}>
				<Route />
			</SafeAreaView>
		</NavigationContainer>
	)
}

