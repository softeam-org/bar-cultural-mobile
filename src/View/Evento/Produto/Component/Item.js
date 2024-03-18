import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "../Style/styleProduto";
import { MaterialIcons } from "@expo/vector-icons";

export default function Item({ title, valor, styleItem, stateQuantidade, onQuantidadeChange }) {
  
  /* Há necessidade de veirificar se stateQuanidade é um objeto, pois apesar de atualizar-se, quando o o componete produto é collapsado
     seu valor retorna como um objeto, para preservar seu estado
  */
  const [quantidade, setQuantidade] = typeof stateQuantidade === "object" ? useState(stateQuantidade.quantidade) :  useState(stateQuantidade);


  // Função para calcular o total
  const calcularTotal = (qtd) => {
    const floatVal = parseFloat(valor.replace(",", ".")).toFixed(2);
    return parseFloat(parseFloat(floatVal) * parseInt(qtd)).toFixed(2);
  };

  const adicionar = () => {
    // Converte a string em inteiro e incrementa enquanto o valor for menor que 99
    const incrementar = parseInt(quantidade) < 99 ? parseInt(quantidade) + 1 : parseInt(quantidade);

    setQuantidade(incrementar.toString().padStart(2, "0"));
    const total = calcularTotal(incrementar);

    // faz a mesma ação, porém o valor é atualizado no componente "Produto"
    onQuantidadeChange(title, incrementar.toString().padStart(2, "0"), total);
  };

  const subtrair = () => {
    // Converte a string em inteiro e subtrai enquanto o valor for maior que 0
    const subtrair = parseInt(quantidade) > 0 ? parseInt(quantidade) - 1 : parseInt(quantidade);

    setQuantidade(subtrair.toString().padStart(2, "0"));
    const total = calcularTotal(subtrair);

    // faz a mesma ação, porém o valor é atualizado no componente "Produto"
    onQuantidadeChange(title, subtrair.toString().padStart(2, "0"), total);
  };

  return (
    <View style={[style.itemContainer, styleItem]}>
      <Text style={style.itemTitle}>{title}</Text>
      <View style={style.selecao}>
        <View style={style.qtdItens}>
          <TouchableOpacity onPress={subtrair}>
            <MaterialIcons name="keyboard-arrow-left" size={40} color="black" />
          </TouchableOpacity>
          <Text style={style.qtdValue}>{String(quantidade)}</Text>
          <TouchableOpacity onPress={adicionar}>
            <MaterialIcons name="keyboard-arrow-right" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={style.textValue}> R$ {valor}</Text>
      </View>
    </View>
  );
}
