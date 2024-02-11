/* eslint-disable react/prop-types */
import { View, Text, TouchableOpacity, ImageBackground, Image, } from "react-native"
import React, { useState } from "react"
import style from "./Style/styleLogin"
import TextI from "./Component/TextI"
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"

export default function LoginScreen({ navigation }) {
	const [nome, setNome] = useState("")
	const [CPF, setCPF] = useState("")
	const [dinheiro, setDinheiro] = useState("")

	//desconsiderável só pro eslint não encher o saco por hora
	console.log(nome)
	console.log(CPF)
	console.log(dinheiro)

	return (
		<ImageBackground source={require("../../../assets/fundo.jpg")} style={style.background}>
			<View style={style.container}>

				<Image style={style.image} source={require("../../../assets/Icone.png")} />

				<View style={style.input}>

					<TextI placeholder="nome" setValue={setNome}>
						<Ionicons name="person-circle-outline" size={32} color="#151515" />
					</TextI>

					<TextI placeholder="CPF" setValue={setCPF} keyboard="numeric">
						<MaterialCommunityIcons name="badge-account-horizontal-outline" size={24} color="black" />
					</TextI>

					<TextI placeholder="dinheiro" setValue={setDinheiro} keyboard="numeric">
						<MaterialIcons name="attach-money" size={24} color="black" />
					</TextI>
				
				</View>

				<View style={style.containerButton}>
					<TouchableOpacity
						onPress={() => navigation.navigate("Drawer")}
						style={style.buttonLogin}
					>
						<Text style={style.buttonTxt}>Cadastrar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	)
}