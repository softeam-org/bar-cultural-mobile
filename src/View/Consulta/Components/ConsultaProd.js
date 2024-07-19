import { View, Text } from 'react-native'
import React from 'react'
import style from '../Style/styleConsProd'

export default function ConsultaProd() {
  let produto = {
    nome: "Batata",
    codigo: "005",
    tipo: "Comida",
    preco: "25,00"
  }
  let linhas = 0

  return (
    <View style={style.container}>
      <View style={[style.card, { height: 190 + (60 * linhas) }]}>

        <View style={style.linha}>
          <Text style={style.txtNormal}>
            Código do Produto
          </Text>
          <Text style={style.txtBold}>
            #{produto.codigo}
          </Text>
        </View>

        <View style={style.linha}>
          <Text style={style.txtBold}>
            {produto.nome}
          </Text>
          <Text style={style.txtNormal}>
            R${produto.preco}
          </Text>
        </View>

        <View style={style.linha}>
          <Text style={style.txtNormal}>
            {produto.tipo}
          </Text>
          <Text style={style.txtNormal}>
            Porções
          </Text>
        </View>

      </View>
    </View>
  )
}