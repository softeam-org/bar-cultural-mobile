import { View, Text, TouchableOpacity } from "react-native"
import React, {useContext} from "react"
import { MaterialIcons } from "@expo/vector-icons"
import style from "./Style/styleFooter"
import { useNavigation } from "@react-navigation/native"

import {RelatContex  } from '../../Context/RelatorioPag'


export default function Footer({valor, nextScreen }) {

	const {total} = useContext(RelatContex)

	const navigation = useNavigation()
	
	return (
		<View style={style.containerFooter}>

			<View style={style.backScreen}>
				<TouchableOpacity style={style.button} onPress={()=>navigation.goBack()}>
					<MaterialIcons name="keyboard-arrow-left" size={50} color="#fff" />
				</TouchableOpacity>
			</View>

			<View style={style.valor}>
				{valor ?
					<Text style={style.txt}>Total: R$ {total}</Text>
					: null
				}
			</View>

			<View style={style.nextScreen}>
				{nextScreen ?
					<TouchableOpacity style={style.button} onPress={()=>navigation.navigate(nextScreen)}>
						<MaterialIcons name="keyboard-arrow-right" size={50} color="#fff" />
					</TouchableOpacity>
					: null
				}
			</View>
		</View>
	)
}