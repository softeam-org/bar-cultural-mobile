import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import style from "./Style/styleEstornoConfirm"
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'

export default function EstornoConfirmScreen(props) {

  const navigation = useNavigation()
  const valor = props.route.params

  return (
    <ImageBackground
      source={require("../../../assets/fundo.jpg")}
      style={style.imgBackground}
    >
      <Header nome={"Estorno"} />
      <View style={style.imgCover}>

        <View style={style.container}>
          <Text style={style.txtQuestion}>Deseja realizar estorno?</Text>
          <Text style={style.txtValue}>Valor à devolver:</Text>
          <Text style={style.value}>R${valor}</Text>
          <TouchableOpacity style={style.button}>
            <Text style={style.txtButton}>
              Confirmar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonCancel} onPress={() => navigation.goBack()}>
            <Text style={style.txtButton}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>

  )
}