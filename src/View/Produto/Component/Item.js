import { useState, useEffect } from "react"
import { View, Text } from "react-native"

import style from "../Style/styleProduto"

import SetaLeft from '../../../../assets/setaLeft.svg' 
import SetaRigth from '../../../../assets/setaRigth.svg' 


export default function Item ({title, valor, styleItem, stateQuantidade, onQuantidadeChange}){

  const [quantidade, setQuantidade] = useState(stateQuantidade)

  useEffect(() => {
    setQuantidade(stateQuantidade); // Atualiza a quantidade sempre que stateQuantidade mudar
  }, [stateQuantidade]);

  //  total da quantidade de itens * valor do item selecionado
  const floatVal = parseFloat(valor.replace(",", ".")).toFixed(2)
  const total = parseFloat(parseFloat(floatVal) * parseInt(quantidade)).toFixed(2)

  const adicionar = () => {
      // Converte a string em inteiro e iincrementa enquanto o valor for menor que 99
    const incrementar = parseInt(quantidade) < 99 ? parseInt(quantidade) + 1 : parseInt(quantidade) 

    // Converte o valor subtraído em string e adciona '0' a esquerda quando a string é menor que 2 caracteres
    setQuantidade(incrementar.toString().padStart(2, '0'))

    // faz a mesma ação, porém o valor é atualizado no componente "Produto"
    onQuantidadeChange(title, incrementar.toString().padStart(2, '0'));

  }

  const subtrair = () => {
    // Converte a string em inteiro e subtrai enquanto o valor for maior que 0
    const subtrair = parseInt(quantidade) > 0 ? parseInt(quantidade) - 1 : parseInt(quantidade) 

    // Converte o valor subtraído em string e adciona '0' a esquerda quando a string é menor que 2 caracteres
    setQuantidade(subtrair.toString().padStart(2, '0'))
    
    // faz a mesma ação, porém o valor é atualizado no componente "Produto"
    onQuantidadeChange(title, subtrair.toString().padStart(2, '0'));

  }

  return(
  <View style={[style.itemContainer, styleItem]}>
    <Text style={style.itemTitle}>{title}</Text>
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