import { View, Text } from 'react-native'
import React from 'react'

import Item from './Component/Item'
import Produto from './Component/Produto'
import style from './Style/styleProduto'
import { ScrollView } from 'react-native-gesture-handler'
import Fundo from '../../Components/Fundo'
import Footer from '../../Components/Footer'

export default function ProdutoScreen() {
  const produtos = [
    {
      titulo: 'Bilheteria',
      itens: [
        {
          titulo: 'Entrada Inteira',
          valor: '15,00'
        },
        {
          titulo: 'Meia-Entrada',
          valor: '10,00'
        }
      ]
    },
    {
      titulo: 'Comida',
      itens: [
        {
          titulo: 'Batata frita',
          valor: '25,00'
        },
        {
          titulo: 'Hambúrguer',
          valor: '25,00'
        },
        {
          titulo: 'Pizza',
          valor: '25,00'
        }
      ]
    },
    {
      titulo: 'Bebida',
      itens: [
        {
          titulo: 'Guaraná',
          valor: '10,00'
        },
        {
          titulo: 'Coca',
          valor: '10,00'
        },
        {
          titulo: 'Água',
          valor: '5,00'
        },
        {
          titulo: 'Gin',
          valor: '30,00'
        },
      ]
    },
    {
      titulo: 'Combo',
      itens: [
        {
          titulo: 'Batata frita + Bebida',
          valor: '35,00'
        },
        {
          titulo: 'Batata frita + Bebida + Hamburguer',
          valor: '45,00'
        },
        {
          titulo: 'Batata frita + Bebida + Hamburguer + Pizza',
          valor: '80,00'
        }
      ]
    }
  ]
  return (
    <Fundo tela={'Produtos'}>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode={'never'}>
        <View style={style.body}>
          {produtos.map((produto, index) => (
            <Produto title={produto.titulo} key={index}>
              {produto.itens.map((item, index) => (
                <Item title={item.titulo} valor={item.valor} key={index}
                  styleItem={{ borderTopWidth: index == 0 ? 0 : 1 }} />
              ))}
            </Produto>
          ))}
        </View>
      </ScrollView>
      <Footer/>
    </Fundo>
  )
}

