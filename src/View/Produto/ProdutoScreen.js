import { View, Text } from 'react-native'
import React from 'react'

import Item from './Component/Item'
import Produto from './Component/Produto'
import style from './Style/styleProduto'
import { ScrollView } from 'react-native-gesture-handler'

export default function ProdutoScreen() {
  const produtos = [
    {
      id: 1,
      titulo: 'Bilheteria',
      itens: [
        {
          id: 1,
          titulo: 'Entrada Inteira',
          valor: '15,00'
        },
        {
          id: 2,
          titulo: 'Meia-Entrada',
          valor: '10,00'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Comida',
      itens: [
        {
          id: 1,
          titulo: 'Batata frita',
          valor: '25,00'
        },
        {
          id: 2,
          titulo: 'Hambúrguer',
          valor: '25,00'
        },
        {
          id: 3,
          titulo: 'Pizza',
          valor: '25,00'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Bebida',
      itens: [
        {
          id: 1,
          titulo: 'Guaraná',
          valor: '10,00'
        },
        {
          id: 2,
          titulo: 'Coca',
          valor: '10,00'
        },
        {
          id: 3,
          titulo: 'Água',
          valor: '5,00'
        },
        {
          id: 4,
          titulo: 'Gin',
          valor: '30,00'
        },
      ]
    },
    {
      id: 4,
      titulo: 'Combo',
      itens: [
        {
          id: 1,
          titulo: 'Batata frita + Bebida',
          valor: '35,00'
        },
        {
          id: 2,
          titulo: 'Batata frita + Bebida + Hamburguer',
          valor: '45,00'
        },
        {
          id: 3,
          titulo: 'Batata frita + Bebida + Hamburguer + Pizza',
          valor: '80,00'
        }
      ]
    }
  ]
  return (
    <ScrollView style={style.body}>

      {produtos.map((produto) => (
        <Produto title={produto.titulo} key={produto.id}>
          {produto.itens.map((item) => (
            <Item title={item.titulo} valor={item.valor} key={item.id} 
            styleItem={{ borderTopWidth: item.id == 1 ? 0 : 1}}/>
          ))}
        </Produto>
      ))}

    </ScrollView>
  )
}

