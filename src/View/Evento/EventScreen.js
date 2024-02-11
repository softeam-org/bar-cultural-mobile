import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Evento from './Component/Evento'

import style from './Style/style'

export default function EventScreen() {
  return (
    <View style={style.container}>
      <Header nome="Eventos"/>

      <Evento/>
    </View>
  )
}