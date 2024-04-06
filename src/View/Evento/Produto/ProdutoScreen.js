import { View, Text } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'

import Item from './Component/Item'
import Produto from './Component/Produto'
import style from './Style/styleProduto'
import { ScrollView } from 'react-native-gesture-handler'
import Fundo from '../../Components/Fundo'
import Footer from '../../Components/Footer'
import { RelatContex } from '../../../Context/RelatorioPag'

export default function ProdutoScreen() {
  const produtos = [
    {
      titulo: 'Bilheteria',
      itens: [
        {
          titulo: 'Entrada Inteira',
          valor: '15,80'
        },
        {
          titulo: 'Meia-Entrada',
          valor: '10,50'
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
   const {compra, relatorio, total } = useContext(RelatContex) //context

/* ----------------------Cria um relatório para os itens comprados de cada produto--------------------------------------- */

  const [selecionados, setSelecionados] = useState([]);

  const handleRelatProduto = (produto) => {
    setSelecionados((prevSelecionados) => {
      const produtoExistente = prevSelecionados.find((item) => item.titulo === produto.titulo); //verifica se o produto ja existe 
      if (produtoExistente) { //Caso exista, é gerado um novo relatório atualizado
        const novoSelecionados = prevSelecionados.map((item) => (item.titulo === produto.titulo ? produto : item));
        return novoSelecionados;
      } else { //caso contrário, o produto é adicionado ao relatório
        
        const novoSelecionados = [...prevSelecionados, produto];
        return novoSelecionados;
      }
    });
  };

/* --------------------------------------------------------------------------------------- */

  //irá calcular o valor total dos produtos selecionados
  const calcularTotal = (selecionados) => {
    let totalItem = 0;
    selecionados.forEach((produto) => {
      produto.itens.forEach((item) => {
        const valor = item.total
        totalItem +=valor;
      });
    });
    return totalItem.toFixed(2); // Formata para duas casas decimais
  };

  useEffect(() => {
    compra(calcularTotal(selecionados), selecionados); // quando o estado de selecionados mudar o total e selecionados atualizam o context
  }, [selecionados])
  
  return (
    <Fundo tela={'Produtos'}>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode={'never'}>
        <View style={style.body}>
          {produtos.map((produto, index) => (
            <Produto title={produto.titulo} key={index} onRelatProduto = {handleRelatProduto}>
              {produto.itens.map((item, i) => (
                <Item title={item.titulo} valor={item.valor} key={i}
                  styleItem={{ borderTopWidth: index == 0 ? 0 : 1 }} />
              ))}
            </Produto>
          ))}
        </View>
      </ScrollView>
      <Footer valor={total} nextScreen={"Pagamento"}/>
    </Fundo>
  )
}

