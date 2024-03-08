import { View, Text, TextInput, ImageBackground, TouchableOpacity } from "react-native"
import React, {useState} from "react"
import Header from "../Components/Header"
import style from "./Style/style"
import { colors } from "../Style/vars"

export default function ConsultaScreen() {
	
  function Verificar() {
    setCodigo("Nenhum dado encontrado!")
    setErro(true)
  }


  const [codigo, setCodigo] = useState()
  const [erro, setErro] = useState(false)
  return (
    <ImageBackground style={style.img} source={require("../../../assets/fundo.jpg")}>
      <View style={style.fundo}>
        <Header nome="Consulta" />
      <View style={style.container}>
          
      <Text style={style.text}>Digite o código ou o nome do produto: </Text>
          <TextInput style={[style.input,{color: erro ? colors.laranja1 : colors.preto}]}
            value={codigo}
            onChangeText={setCodigo}
            onFocus={() => { setErro(false); setCodigo("")}}
          />
        <TouchableOpacity onPress={Verificar} style={style.button}>Confirmar</TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  )
}






