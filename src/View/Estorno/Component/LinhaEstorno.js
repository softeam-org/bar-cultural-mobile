import { View, Text, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import style from "../Style/styleLinha"

export default function Linha({ Cod, Cred, Produto, setItens, itens, setValor, ValorF }) {

	const [marcado, setMarcado] = useState(false)
	// console.log("ValorF")
	// console.log(ValorF)
	function addIten() {
		let aux = itens
		if (marcado) {
			aux = aux.filter((produto) => {
				if (produto.id == Produto.id) {
					setValor(ValorF - Produto.preco)
					return 0
				}
				else {
					return Produto
				}
			})

		} else {
			aux.push(Produto)
			setValor(ValorF + Produto.preco)
		}
		setMarcado(!marcado)
		setItens(aux)

	}

	return (
		<View style={[style.containerLinha, { backgroundColor: marcado ? "#d9d9d9" : null }]}>
			{
				Cod ?

					<View style={style.containerCod}>
						<Text style={style.bold}>#{Cod}</Text>
					</View>

					:
					Cred ?
						<View style={style.containerCred}>
							<Text style={style.bold}>{Cred}</Text>
							<Text>R$ {ValorF}</Text>
						</View>
						:
						<TouchableOpacity
							style={style.touch}
							onPress={addIten}
						>
							<Text style={style.txt}>{Produto.nome}</Text>
							<Text>R$ {Produto.preco}</Text>
						</TouchableOpacity>
			}
		</View>
	)
}