import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import style from './Style/styleEstornoDetalhes'
import Header from '../Components/Header'

export default function EstornoScreen() {

	const[cod,setCod] = useState()
	const[erro,setErro] = useState(false)

	function Verificar(){
		setCod("Código inválido! Digite novamente.")
		setErro(true)
	}

	return (
		<ImageBackground 
		source={require("../../../assets/fundo.jpg")}
		style={style.imgBackground}
		>
			<Header nome={"Estorno"}/> 
			<View style={style.cover}>

				<View style={style.container}>

					<Text style={style.titulo}>
						Código da NF
					</Text>

					<TextInput
					style={[style.input,{color:erro?"#E43F09":"#000"}]}
					onChangeText={setCod}
					value={cod}
					clearTextOnFocus={true}
					keyboardType='numeric'
					onFocus={()=>{
						setErro(false)
						setCod('')
					}}
					/>

					<TouchableOpacity style={style.button} onPress={Verificar}>
						<Text style={style.txtButton}>Confirmar</Text>
					</TouchableOpacity>

				</View>

			</View>
		</ImageBackground>
	)
}