import { View, Text } from 'react-native'
import React from 'react'

import CollapseComponent from './Component/CustomAccordion'
import style from './Style/styleProduto'

export default function ProdutoScreen() {
  return (
    <View style={style.body}>
        <CollapseComponent title={'Bilheteria'}>
          <Text>Item 1</Text>      
          <Text>Item 2</Text>
          <Text>Item 3</Text>
          <Text>Item 4</Text>
          <Text>Item 5</Text>
          <Text>Item 6</Text>

        </CollapseComponent>
    </View>
  )
}

