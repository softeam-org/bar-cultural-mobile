import { View, Text, TextInput, ImageBackground, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import Header from "../Components/Header"
import Fundo from '../Components/Fundo'
import style from "./Style/style"
import { colors } from "../Style/vars"
import { useNavigation } from "@react-navigation/native"

export default function ConsultaScreen() {

  const navigation = useNavigation()

  function Verificar() {
    navigation.navigate('Consulta Detalhes')
  }


  const [codigo, setCodigo] = useState()
  const [erro, setErro] = useState(false)
  return (
    <Fundo tela={'Consulta'}>

      <View style={style.container}>

        <Text style={style.text}>Digite o código ou o nome do produto: </Text>
        <TextInput style={[style.input, { color: erro ? colors.laranja1 : colors.preto }]}
          value={codigo}
          onChangeText={setCodigo}
          onFocus={() => { setErro(false); setCodigo("") }}
        />
        <TouchableOpacity onPress={Verificar} style={style.button}>
          <Text style={style.txtButton}>
            Confirmar
          </Text>
        </TouchableOpacity>
      </View>
    </Fundo>

  )
}






