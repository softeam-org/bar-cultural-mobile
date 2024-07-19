import { View, Text, TouchableOpacity, Animated,TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './Style/styleHeader'
import styles from './Style/styleDrawerButton'

import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Header({ nome }) {

  const [enable, setEnable] = useState(false)
  const [auxEnable, setAux] = useState(false)
  const [drawerHeigh, setDrawerHeigh] = useState(new Animated.Value(0))
  const [buttonOpactiy, setButton1] = useState(new Animated.Value(0))

  //* Telas navegaveis pelo drawer
  let navegar = ['Eventos', 'Estorno', 'Consulta','Impressão', 'Sair']

  function filtrarNave(navegar){
    if(nome=="Produtos" && navegar=='Eventos')
      return null
    else if(navegar!=nome){
      return navegar
    }
    else{
      return null
    }
  }

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

  //* Botão do drawer
  function DrawerButton({nome}) {
    const navigation= useNavigation()
  
    return (
      <AnimatedTouchable style={[styles.container, { opacity:buttonOpactiy }]} 
      onPress={()=>{
        if (nome==='Sair'){
          navigation.navigate('Login')
        }else{
          navigation.navigate(`${nome}`)
        }
        setEnable(false)
      }}
      >
        <Text style={style.title}>{nome}</Text>
      </AnimatedTouchable>
    )
  }

  //* Animação de abertura e fechamento do drawer
  function EnableDrawer() {
    if (enable) {
      setAux(true)
      Animated.sequence([
        Animated.timing(
          drawerHeigh, {
          toValue: 320,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(
          buttonOpactiy, {
          toValue: 1,
          duration: 125,
          useNativeDriver: false
        })
      ]).start()
    } else {
      Animated.sequence([
        Animated.timing(
          buttonOpactiy, {
            toValue: 0,
            duration: 125,
            useNativeDriver: false
          }
          ),
          Animated.timing(
            drawerHeigh, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false
          }),
        ]).start()
      setTimeout(() => setAux(false), 550)
    }
  }


  useEffect(() => {
    EnableDrawer()
  }, [enable])

  return (
    <>
      <View style={style.container}>
        <TouchableOpacity style={style.burguerBar} onPress={() => setEnable(!enable)}>
          <FontAwesome name="bars" size={30} color="#fff" />
        </TouchableOpacity>

        <View style={style.containerTitle}>
          <Text style={style.title}>{nome}</Text>
        </View>

      </View>

      {/* Renderização do drawer */}
      {auxEnable ?
        <View style={style.screenDrawer} >
          <Animated.View style={[style.containerDrawer, { height: drawerHeigh }]} >
            {navegar.filter(filtrarNave).map((navegar,i)=><DrawerButton nome={navegar} key={i}/>)}
            
          </Animated.View>
          <TouchableOpacity style={{flex:1}} onPress={()=>setEnable(false)}/>
        </View>
        : null
      }
    </>
  )
}


