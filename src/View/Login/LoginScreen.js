import { View, Text, Button, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import style from './Style/styleLogin'

export default function LoginScreen({ navigation }) {
  return (
    <View style={style.background}>
      <View style={style.container}>

        <Image style={style.image} />

        <View style={style.input}>
        </View>

        <View style={style.containerButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Drawer')}
            style={style.buttonLogin}
          >
            <Text style={style.buttonTxt}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}