import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import style from "./Style/styleFooter"
import { useNavigation } from "@react-navigation/native"

export default function Footer({ Valor, nextScreen }) {
	const navigation = useNavigation()

	return (
		<View style={style.containerFooter}>

			<View style={style.backScreen}>
				<TouchableOpacity style={style.button} onPress={() => navigation.goBack()}>
					<MaterialIcons name="keyboard-arrow-left" size={50} color="#fff" />
				</TouchableOpacity>
			</View>

			<View style={style.valor}>
				{Valor ?
					<Text style={style.txt}>Total: R${Valor}</Text>
					: null
				}
			</View>

			<View style={style.nextScreen}>
				{nextScreen ?
					<TouchableOpacity style={style.button} onPress={() => navigation.navigate(nextScreen, Valor)}>
						<MaterialIcons name="keyboard-arrow-right" size={50} color="#fff" />
					</TouchableOpacity>
					: null
				}
			</View>
		</View>
	)
}