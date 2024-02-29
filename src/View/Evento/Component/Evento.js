import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import style from "../Style/styleEvento"
import { useNavigation } from "@react-navigation/core"

export default function Evento({evento}) {

	const navigation= useNavigation()
  
	return (
		<TouchableOpacity style={style.container} onPress={()=>navigation.navigate("Produtos")}>
			<View style={style.containerTitle}>
				<Text style={style.title}>Evento</Text>
			</View>

			<View style={style.containerInfo}>
				<View style={style.basicDatas}>
					<View style={style.containerData}>
						<Text style={style.status}>Em aberto</Text>
					</View>

					<View style={style.containerData}>
						<Text style={style.date}>Data: 27/06/2024</Text>
					</View>
				</View>
 
				<View style={style.moreInfo}>
					<TouchableOpacity>
						<Text style={style.buttonMore}>Mais</Text>
					</TouchableOpacity>
				</View>

			</View>
		</TouchableOpacity>
	)
}