import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Header from './Header'
import style from './Style/styleFundo'

export default function Fundo({tela,children}) {
  return (
    <View style={style.container}>
      <ImageBackground source={require('../../../assets/fundo.jpg')} style={style.img}>
        <View style={style.cover}>
          <Header nome={tela}/>
          {children}
        </View>
      </ImageBackground>
    </View>
  )
}