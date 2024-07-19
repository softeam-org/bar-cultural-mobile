import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import Login from "../View/Login/LoginScreen"
import Evento from "../View/Evento/EventScreen"
import DetalheEvento from "../View/Evento/EventDetalhesScreen"
import Estorno from "../View/Estorno/EstornoScreen"
import EstornoDetalhes from "../View/Estorno/EstornoDetalhesScreen"
import EstornoConfirm from '../View/Estorno/EstornoConfirmScreen'
import Produtos from "../View/Evento/Produto/ProdutoScreen";
import Consulta from "../View/Consulta/ConsultaScreen";
import ConsultaDetalhes from "../View/Consulta/ConsultaDetailsScreen";
import Impressao from "../View/Impressao/ImpressaoScreen"
import PagamentoScreen from "../View/Evento/Pagamento/PagamentoScreen"

import TotalProvider  from "../Context/RelatorioPag" //context valor total d0 pagamento e relatório

const Stack = createStackNavigator()

export default function MyStack() {
	return (
		<TotalProvider>
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Eventos" component={Evento} />
			<Stack.Screen name="Detalhes Evento" component={DetalheEvento} />
			<Stack.Screen name="Estorno" component={Estorno} />
			<Stack.Screen name="Consulta" component={Consulta} />
			<Stack.Screen name="Consulta Detalhes" component={ConsultaDetalhes} />
			<Stack.Screen name="Estorno detalhes" component={EstornoDetalhes} />
			<Stack.Screen name="Estorno confirmação" component={EstornoConfirm} />
			<Stack.Screen name="Produtos" component={Produtos} />
			<Stack.Screen name="Pagamento" component={PagamentoScreen} />
			<Stack.Screen name="Impressão" component={Impressao} />
		</Stack.Navigator>
	</TotalProvider>
	)

}