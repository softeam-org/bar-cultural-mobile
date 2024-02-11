import { View, TextInput } from "react-native"
import React from "react"
import style from "../Style/styleLogin"

export default function TextI({setValue,placeholder,children,keyboard}) {
	
	return (
		<View style={style.containerInput}>
			<View style={style.iconInput}>
				{children}
			</View>
			<TextInput
				style={style.txtInput}
				placeholder={placeholder}
				onChangeText={setValue}
				keyboardType={keyboard}
			/>
		</View>
	)
}