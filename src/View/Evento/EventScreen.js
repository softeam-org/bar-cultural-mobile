import { View } from "react-native"
import React from "react"
import Header from "../Components/Header"
import Evento from "./Component/Evento"

import style from "./Style/style"

export default function EventScreen() {

  const eventos = [
    { aberto: true,nome:'quebradeira', data: '24/14/65', banda: 'jubileuson', obs: ['muito ruim filho', 'serio mesmo muito ruim'] },
    { aberto: false,nome:'sejoga', data: '04/14/15', banda: 'chibinha', obs: ['muito ruim filho', 'bom dimais', 'c é doido'] }
  ]

  return (
    <View style={style.container}>
      <Header nome="Eventos" />

      {eventos.map((evento, i) =>
        <Evento evento={evento} key={i}/>
      )}
    </View>
  )
}