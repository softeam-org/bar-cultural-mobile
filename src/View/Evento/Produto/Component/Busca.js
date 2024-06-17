import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import style from "../Style/styleProduto";

export default function Busca({ data, onBusca }) {
  const [string, setString] = useState(null);
  
  // Verifica em data se há um produto que contenha o item digitado na busca
  const handleSearch = (text) => {
    const searchResult = data.filter((produto) =>
      produto.itens.some((item) => item.titulo.includes(text))
    );
    text ? onBusca(searchResult) : onBusca(null); // Passa o resultado da busca para o componente pai se existir string de pesquisa
  };

  const onChangeText = (text) => {
    setString(text);
    handleSearch(text); // Chama a função de busca quando o texto é alterado
  };

  return (
    <View style={style.buscaContainer}>
      <TextInput
        style={style.textInputBusca}
        placeholder="Campo de busca"
        placeholderTextColor={"white"}
        value={string}
        onChangeText={onChangeText} // Passa a função onChangeText como callback para atualizar o valor
      />
    </View>
  );
}
