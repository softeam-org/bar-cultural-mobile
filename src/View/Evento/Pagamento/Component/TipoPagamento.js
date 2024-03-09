import { MaterialIcons } from "@expo/vector-icons"
import { View, Text, TouchableOpacity } from "react-native"

import style from "../Style/stylePagamento"

export default function TipoPagamento({Icon, tipo, onPress }){

  return(
    <TouchableOpacity style={style.tipoContainer} onPress={onPress }>
      <MaterialIcons name={Icon} size={30} color={'black'}/>
      <Text style={style.tipoText}>{tipo}</Text>
    </TouchableOpacity>
  )

}