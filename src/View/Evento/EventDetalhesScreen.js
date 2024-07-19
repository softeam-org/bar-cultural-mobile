import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import style from './Style/styleEventoDetalhes'
import Header from '../Components/Header'
import { Entypo } from '@expo/vector-icons';

export default function EventoDetalhes(props) {

  const evento = props.route.params

  return (
    <View style={style.containerView}>
      <Header nome={'Eventos'} />
      <ImageBackground
        source={require('../../../assets/fundo.jpg')}
        style={style.img}
      >
        <View style={style.cover}>
          <TouchableOpacity style={[style.container, { height: 240 + (20 * evento.obs.length) }]}>
            <View style={style.containerTitle}>
              <Text style={style.title}>{evento.nome}</Text>
            </View>

            <View style={[style.basicDatas, { height: 150 + (20 * evento.obs.length) }]}>
              <View style={style.containerData}>
                <Text style={style.bold}>{evento.aberto ? 'Em aberto' : 'fechado'}</Text>
              </View>

              <View style={style.containerData}>
                <Text style={style.bold}>Data: </Text>
                <Text style={style.date}>{evento.data}</Text>
              </View>

              <View style={style.containerData}>
                <Text style={style.bold}>Banda: </Text>
                <Text style={style.date}>{evento.banda}</Text>
              </View>

              <View style={style.containerObs}>
                <Text style={style.bold}>Observações: </Text>
                {evento.obs.map((obs, i) => 
                  {
                    return(
                      <View style={style.viewObs} key={i}>
                      <Entypo name="dot-single" size={24} color="black" />
                      <Text style={style.txtObs}>{obs}</Text>
                    </View>
                    )
                  }
                    
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}