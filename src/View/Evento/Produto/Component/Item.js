import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import style from "../Style/styleProduto";
import { RelatContex } from "../../../../Context/RelatorioPag";

export default function Item({ title, valor, styleItem, stateQuantidade, onQuantidadeChange }) {
  const { relatorio } = useContext(RelatContex); // context

  // Encontra o item específico dentro do contexto
  const itemEncontrado = relatorio.flatMap(produto =>
    produto.itens.find(item => item.nome === title)
  ).find(item => item !== undefined); // Filtra os valores undefined
    
  // Inicializa a quantidade e o total com o valor do estado ou o valor encontrado no contexto
  const [quantidade, setQuantidade] = useState(
    stateQuantidade ? (typeof stateQuantidade === "object" ? stateQuantidade.quantidade : stateQuantidade) : (itemEncontrado ? itemEncontrado.quantidade : "00")
  );
  
  useEffect(() => {
    if (itemEncontrado) {
      setQuantidade(itemEncontrado.quantidade);
    }
  }, [itemEncontrado, relatorio]);

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

    // Faz a mesma ação, porém o valor é atualizado no componente "Produto"
    onQuantidadeChange(title, incrementar.toString().padStart(2, "0"), total);
  };

  const subtrair = () => {
    // Converte a string em inteiro e subtrai enquanto o valor for maior que 0
    const subtrair = parseInt(quantidade) > 0 ? parseInt(quantidade) - 1 : parseInt(quantidade);

    setQuantidade(subtrair.toString().padStart(2, "0"));
    const total = calcularTotal(subtrair);

    // Faz a mesma ação, porém o valor é atualizado no componente "Produto"
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
          <Text style={style.qtdValue}>{quantidade}</Text>
          <TouchableOpacity onPress={adicionar}>
            <MaterialIcons name="keyboard-arrow-right" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={style.textValue}> R$ {valor}</Text>
      </View>
    </View>
  );
}
