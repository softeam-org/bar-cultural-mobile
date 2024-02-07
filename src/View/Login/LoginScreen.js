/* eslint-disable react/prop-types */
import { View, Text, TouchableOpacity, ImageBackground, Image, TextInput } from "react-native"
import React, { useState } from "react"
import style from "./Style/styleLogin"
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"

export default function LoginScreen({ navigation }) {

	const [nome, setNome] = useState("")
	const [CPF, setCPF] = useState("")
	const [dinheiro, setDinheiro] = useState("")
	//desconsiderável só pro eslint não encher o saco por hora
	console.log(nome + CPF + dinheiro)

	return (
		<ImageBackground source={require("../../../assets/fundo.jpg")} style={style.background}>
			<View style={style.container}>

				<Image style={style.image} source={require("../../../assets/Icone.png")} />

				<View style={style.input}>
					<View style={style.containerInput}>
						<View style={style.iconInput}>
							<Ionicons name="person-circle-outline" size={32} color="#151515" />
						</View>
						<TextInput
							style={style.txtInput}
							placeholder="nome"
							onChangeText={setNome}
						/>
					</View>

					<View style={style.containerInput}>
						<View style={style.iconInput}>
							<MaterialCommunityIcons name="badge-account-horizontal-outline" size={24} color="black" />
						</View>
						<TextInput
							style={style.txtInput}
							placeholder="CPF"
							onChangeText={setCPF}
							keyboardType="numeric"
						/>
					</View>

					<View style={style.containerInput}>
						<View style={style.iconInput}>
							<MaterialIcons name="attach-money" size={24} color="black" />
						</View>
						<TextInput
							style={style.txtInput}
							placeholder="dinheiro"
							onChangeText={setDinheiro}
							keyboardType="numeric"
						/>
					</View>
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