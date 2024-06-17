import { FontAwesome6 } from "@expo/vector-icons"
import { Text, TouchableOpacity } from "react-native"

import style from "../Style/stylePagamento"

export default function TipoPagamento({Icon, tipo, onPress }){

  return(
    <TouchableOpacity style={style.tipoContainer} onPress={onPress }>
      <FontAwesome6 name={Icon} size={30} color={'black'}/>
      <Text style={style.tipoText}>{tipo}</Text>
    </TouchableOpacity>
  )

}