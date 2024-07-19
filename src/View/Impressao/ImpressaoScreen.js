import { View, Text } from "react-native"
import React, { useState } from "react"
import style from "./Style/style"
import ButtonPoweroff from "./Component/ButtonPowerOff"
import Fundo from '../Components/Fundo'

export default function ImpressaoScreen() {

  const [ativo, setAtivo] = useState(true)

  return (
    <Fundo tela="Impressão">
      <View style={style.body}>
        <View style={style.containerOption}>
          <Text style={style.textOption}>Deseja alterar a configuração de impressão de NF?</Text>
          <ButtonPoweroff estado={ativo} onPress={() => { setAtivo(!ativo) }} />
        </View>
      </View>
    </Fundo>
  )

}