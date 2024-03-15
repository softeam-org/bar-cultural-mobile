import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import style from '../Style/stylePagamento'
import { colors } from "../../../Style/vars";

export default function Alterar ({onPress, visibleAlt}){
  
  const [valor, setValor] = useState(null)

  const handleValor = (val) => {
    setValor(val)
  }

  const confirm = () => {
    if(valor != null || !isNaN(parseFloat(valor))){
      onPress(valor, !visibleAlt) 
    } 
  }
  const cancelar = () =>{
    onPress(!visibleAlt)
  }
  
  return(
    <View style={style.confirmContainer}>
      <Text style={style.confirmText}>Digite o novo valor:</Text>
      <View style={style.valAlterarContainer}>
        <Text style={style.valAlterar}>R$</Text>
        <TextInput
          onChangeText={handleValor}
          value={valor}
          keyboardType="numeric"
          style={style.valAlterar}
        ></TextInput>
      </View>
      <View style={style.Containerbutton}>
        <TouchableOpacity style={[style.button, {backgroundColor: colors.verde}]} onPress={confirm}>
          <Text style={style.textButton}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.button, {backgroundColor: colors.laranja1}]} onPress={cancelar}>
          <Text style={style.textButton}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}