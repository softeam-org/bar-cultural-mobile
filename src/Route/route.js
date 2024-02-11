import React from "react"

import Evento from "../View/Evento/EventScreen"
import Estorno from "../View/Estorno/EstornoScreen"
import Login from "../View/Login/LoginScreen"

import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"

const Drawer = createDrawerNavigator()

function MyDrawer() {
	return (
		<Drawer.Navigator initialRouteName="Evento" >
			<Drawer.Screen name="Evento" component={Evento} />
			<Drawer.Screen name="Estorno" component={Estorno} />
		</Drawer.Navigator>
	)
}


const Stack = createStackNavigator()

export default function MyStack() {
	return (
		<Stack.Navigator
			screenOptions={{headerShown:false}}
		>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Drawer" component={MyDrawer} />
		</Stack.Navigator>
	)
}