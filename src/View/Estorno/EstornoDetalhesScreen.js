import React, { useEffect, useState } from "react"
import { View, ImageBackground } from "react-native"
import style from "./Style/styleEstorno"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Linha from "./Component/LinhaEstorno"

export default function EstornoDetalhesScreen() {
	const produtos = [
		{ nome: "Ingresso Inteira", preco: 15.00,id:1 },
		{ nome: "Ingresso Inteira", preco: 15.00,id:2 },
		{ nome: "Batatas", preco: 25.00,id:3 },
		{ nome: "Batatas", preco: 25.00,id:4 },
	]
	const [valorFinal,setValor] = useState(0)
	const [itensEstorno,setItens]=useState([])

	return (
		<ImageBackground
			source={require("../../../assets/fundo.jpg")}
			style={style.imgBackground}
		>
			<Header nome={"Estorno"}/>

			<View style={style.imgCover}>
					
				<View style={[style.container,{height:130 + (50*produtos.length)}]}>
					<Linha Cod="001"/>
					{
						produtos.map((produto,i)=> 
							<Linha Produto={produto} 
							itens={itensEstorno} setItens={setItens} 
							ValorF={valorFinal} setValor={setValor} key={i}/>)
					}
					<Linha Cred="Crédito" ValorF={valorFinal}/>
				</View>


			</View>
			<Footer Valor={valorFinal} nextScreen={"Estorno confirmação"}/>
		</ImageBackground>
	)
}


