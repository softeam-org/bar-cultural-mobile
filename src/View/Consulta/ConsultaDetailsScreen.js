import { View, Text } from 'react-native'
import React from 'react'
import Fundo from '../Components/Fundo'
import Footer from '../Components/Footer'
import ConsultaProd from './Components/ConsultaProd'

export default function ConsultaDetailsScreen() {
  return (
    <Fundo tela={'Consulta'}>

      <ConsultaProd />

      <Footer />
    </Fundo>
  )
}