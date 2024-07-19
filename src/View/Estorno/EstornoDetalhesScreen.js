import React, { useEffect, useState } from "react"
import { View, ImageBackground } from "react-native"
import style from "./Style/styleEstorno"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Linha from "./Component/LinhaEstorno"
import Fundo from "../Components/Fundo"

export default function EstornoDetalhesScreen() {
	const produtos = [
		{ nome: "Ingresso Inteira", preco: 15.00, id: 1 },
		{ nome: "Ingresso Inteira", preco: 15.00, id: 2 },
		{ nome: "Batatas", preco: 25.00, id: 3 },
		{ nome: "Batatas", preco: 25.00, id: 4 },
	]
	const [valorFinal, setValor] = useState(0)
	const [itensEstorno, setItens] = useState([])

	return (
		<Fundo tela={"Estorno"}>

			<View style={{ flex: 1 }}>

				<View style={[style.container, { height: 130 + (50 * produtos.length) }]}>
					<Linha Cod="001" />
					{
						produtos.map((produto, i) =>
							<Linha Produto={produto}
								itens={itensEstorno} setItens={setItens}
								ValorF={valorFinal} setValor={setValor} key={i} />)
					}
					<Linha Cred="Crédito" ValorF={valorFinal} />
				</View>

			</View>

			<Footer valor={valorFinal} nextScreen={"Estorno confirmação"} />
		</Fundo>
	)
}


