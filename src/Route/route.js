import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import Login from "../View/Login/LoginScreen"
import Evento from "../View/Evento/EventScreen"
import Estorno from "../View/Estorno/EstornoScreen"
import EstornoDetalhes from "../View/Estorno/EstornoDetalhesScreen"
import EstornoConfirm from '../View/Estorno/EstornoConfirmScreen'
import Produtos from "../View/Evento/Produto/ProdutoScreen";
import Impressao from "../View/Impressao/ImpressaoScreen"

const Stack = createStackNavigator()

export default function MyStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Eventos" component={Evento} />
			<Stack.Screen name="Estorno" component={Estorno} />
			<Stack.Screen name="Estorno detalhes" component={EstornoDetalhes} />
			<Stack.Screen name="Estorno confirmação" component={EstornoConfirm} />
			<Stack.Screen name="Produtos" component={Produtos} />
			<Stack.Screen name="Impressão" component={Impressao} />
		</Stack.Navigator>
	)

}