import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'

import styles from '../Style/styleProduto'
import Seta from '../../../../assets/seta.svg' 

export default function Produto({title, children}) {
  
  const [isExpanded, setIsExpanded] = useState(false)
  const [animation] = useState(new Animated.Value(0))
  const [rotateAnimation] = useState(new Animated.Value(0))

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded) // atualiza estado do componente
  } 

  // A animação é aplicada de acordo com os estados do isExpanded
  useEffect(() => {
    Animated.timing(animation, {
      toValue: isExpanded ? 1 : 0, // se o tamanho for verdadeiro, o collapse será exibido
      duration: 400, // Intervalo de tempo da animação 
      useNativeDriver: false, // Necessário para animações de layout
    }).start()

    // Usa o mesmo escopo de animação padrão, contudo, a animação é realizada em um tempo menor
    Animated.timing(rotateAnimation, {
      toValue: isExpanded ? 1 : 0, 
      duration: 200, 
      useNativeDriver: false,
    }).start()
  }, [isExpanded]) 



  const rotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "0deg"] //grau de rotação
  })

  return (
    <View style={styles.collapse}>

      <TouchableOpacity onPress={toggleAccordion} >
        <View style={{...styles.headerCollapse, borderRadius: isExpanded ? 0 : 20}}> 
          <Text style={styles.headerText}>{title}</Text>
          <Animated.View style={{ transform: [{ rotate }] }}>
              <Seta width={30} height={18} fill={'#ffffff'}/>
          </Animated.View>
        </View>
      </TouchableOpacity>

        {isExpanded && (
          <View style={styles.expanded}>
            {children}
          </View>
        )}
      
    </View>
  )
}
