import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../Style/styleEvento'
import { useNavigation } from '@react-navigation/core'
export default function Evento({evento}) {

  const navigation = useNavigation()

  return (
    <TouchableOpacity style={style.container}>
      <View style={style.containerTitle}>
        <Text style={style.title}>{evento.nome}</Text>
      </View>

      <View style={style.containerInfo}>
        <View style={style.basicDatas}>
          <View style={style.containerData}>
            <Text style={style.status}>{evento.aberto?'Em aberto':'fechado'}</Text>
          </View>

          <View style={style.containerData}>
            <Text style={style.date}>Data: {evento.data}</Text>
          </View>
        </View>
 
        <View style={style.moreInfo}>
          <TouchableOpacity onPress={()=> navigation.navigate('Detalhes Evento',evento)}>
            <Text style={style.buttonMore}>Mais</Text>
          </TouchableOpacity>
        </View>
			</View>
		</TouchableOpacity>
	)
}