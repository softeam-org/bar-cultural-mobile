import { useState } from "react"
import { View, Text } from "react-native"

import style from "../Style/styleProduto"

import SetaLeft from '../../../../assets/setaLeft.svg' 
import SetaRigth from '../../../../assets/setaRigth.svg' 


export default function Item ({title, valor, styleItem}){

  const [quantidade, setQuantidade] = useState('00')

  //  total da quantidade de itens * valor do item selecionado
  const floatVal = parseFloat(valor.replace(",", ".")).toFixed(2)
  const total = parseFloat(parseFloat(floatVal) * parseInt(quantidade)).toFixed(2)

  const adicionar = () => {
      // Converte a string em inteiro e iincrementa enquanto o valor for menor que 99
    const incrementar = parseInt(quantidade) < 99 ? parseInt(quantidade) + 1 : parseInt(quantidade) 

    // Converte o valor subtraído em string e adciona '0' a esquerda quando a string é menor que 2 caracteres
    setQuantidade(incrementar.toString().padStart(2, '0'))
  }

  const subtrair = () => {
    // Converte a string em inteiro e subtrai enquanto o valor for maior que 0
    const subtrair = parseInt(quantidade) > 0 ? parseInt(quantidade) - 1 : parseInt(quantidade) 

    // Converte o valor subtraído em string e adciona '0' a esquerda quando a string é menor que 2 caracteres
    setQuantidade(subtrair.toString().padStart(2, '0'))
  }

  return(
  <View style={[style.itemContainer, styleItem]}>
    <Text>{title}</Text>
    <View style={style.selecao}>
      <View style={style.qtdItens}>
        <SetaLeft onPress={subtrair}/>
        <Text style={style.qtdValue}>{String(quantidade)}</Text>
        <SetaRigth onPress={adicionar}/>
      </View>
      <Text style={style.textValue}> R$ {valor}</Text>
    </View>
  </View>)
}