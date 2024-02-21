import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { Text, View, ImageBackground } from 'react-native';

const imgBg = require('../../../assets/fundo.jpg');
const imgCover = require('../../../assets/sobrefundo.png');

export default function EstornoScreen() {
  const produtos = [
    { nome: "Ingresso Inteira", preco: 15.00 },
    { nome: "Batatas", preco: 25.00 }
  ];

  const [total, setTotal] = React.useState(0);

  const handleClick = (preco) => {
    setTotal(total + preco);
  };
  const credito = produtos.reduce((acc, produto) => acc + produto.preco, 0);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imgBg}
        style={styles.imgBackground}
      >
        <ImageBackground
        source={imgCover}
        style={styles.imgCover}
      ></ImageBackground>
        {produtos.map((produto, index) => (
          <TouchableOpacity key={index} onPress={() => handleClick(produto.preco)}>
            <Text>{produto.nome} R$ {produto.preco},00</Text>
          </TouchableOpacity>
        ))}
        <Text>Crédito: R$ {credito}</Text>
        <Text>Total: R$ {total},00</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover"
  },
  imgCover: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    position: 'absolute',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
