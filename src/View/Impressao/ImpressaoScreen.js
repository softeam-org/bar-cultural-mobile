import { View, Text } from "react-native"
import { useState } from "react"
import style from "./Style/style"

import ButtonPoweroff from "./Component/ButtonPowerOff"

export default function ImpressaoScreen(){
  
  const [ativo, setAtivo] = useState(true)
  
  return(
    <View style={style.body}>
      <View style={style.containerOption}>
        <Text style={style.textOption}>Deseja alterar a configuração de impressão de NF?</Text>
        <ButtonPoweroff  estado={ativo}  onPress={()=>{setAtivo(!ativo)}} /> 
      </View>
    </View>
  )

}