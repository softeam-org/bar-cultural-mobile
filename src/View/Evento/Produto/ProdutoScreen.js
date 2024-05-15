import { View, ScrollView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'

import Item from './Component/Item'
import Produto from './Component/Produto'
import style from './Style/styleProduto'
import Fundo from '../../Components/Fundo'
import Footer from '../../Components/Footer'
import { RelatContex } from '../../../Context/RelatorioPag'
import Busca from './Component/Busca'
import produtos from '../../../data'

export default function ProdutoScreen() {
  const { compra, total, relatorio } = useContext(RelatContex) // context

  /* ----------------------Cria um relatório para os itens comprados de cada produto--------------------------------------- */
  const [selecionados, setSelecionados] = useState(relatorio || []);
  const [busca, setBusca] = useState();

  const handleRelatProduto = (produto) => {
    setSelecionados((prevSelecionados) => {
      prevSelecionados = prevSelecionados || []; 
      
      const prodExiste = prevSelecionados.find((item) => item.titulo === produto.titulo);

      // caso o item seja novo, o item é adicionado normalmente nas lista de selecionados, caso contrário, ele é atualizado
      if (prodExiste) {
        // Atualizar itens do produto existente
        const novoSelecionados = prevSelecionados.map((item) => {
          if (item.titulo === produto.titulo) {
            const itensAtualizados = item.itens.map((existenteItem) => {
              const novoItem = produto.itens.find((novo) => novo.nome === existenteItem.nome);
              if (novoItem) {
                return { ...novoItem, modificado: novoItem.quantidade !== existenteItem.quantidade };
              }
              return existenteItem;
            });

            // Adiciona novos itens que não estavam no produto anteriormente
            produto.itens.forEach((novoItem) => {
              if (!item.itens.find((existenteItem) => existenteItem.nome === novoItem.nome)) {
                itensAtualizados.push({ ...novoItem, modificado: true });
              }
            });

            return { ...item, itens: itensAtualizados };
          }
          return item;
        });
        return novoSelecionados;
      } else {
        // Adicionar novo produto com itens
        const itensModificados = produto.itens.map((novoItem) => ({ ...novoItem, modificado: true }));
        return [...prevSelecionados, { ...produto, itens: itensModificados }];
      }
    });
  };

  /* --------------------------------------------------------------------------------------- */

  // irá calcular o valor total dos produtos selecionados
  const calcularTotal = (selecionados) => {
    let totalItem = 0;
    selecionados.forEach((produto) => {
      if (produto.itens.length > 0) {
        produto.itens.forEach((item) => {
          const valor = item.total ? item.total : 0;
          totalItem += valor;
        });
      }
    });
    return totalItem.toFixed(2);
  };

  useEffect(() => {
    compra(calcularTotal(selecionados), selecionados);
  }, [selecionados]);

  // função para buscar produto
  const handleBusca = (resultados) => {
    setBusca(resultados);
  };

  return (
    <Fundo tela={'Produtos'}>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode={'never'}>
        <View style={style.body}>
          {!busca && produtos.map((produto, index) => (
            <Produto title={produto.titulo} key={index} onRelatProduto={handleRelatProduto}>
              {produto.itens.map((item, i) => (
                <Item title={item.titulo} valor={item.valor} key={i}
                  styleItem={{ borderTopWidth: index === 0 ? 0 : 1 }} />
              ))}
            </Produto>
          ))}
        </View>
        <View style={style.body}>
          {busca && busca.map((produto, index) => (
            <Produto title={produto.titulo} key={index} onRelatProduto={handleRelatProduto}>
              {produto.itens.map((item, i) => (
                <Item title={item.titulo} valor={item.valor} key={i}
                  styleItem={{ borderTopWidth: index === 0 ? 0 : 1 }} />
              ))}
            </Produto>
          ))}
        </View>
      </ScrollView>
      <Busca data={produtos} onBusca={handleBusca} />
      <Footer valor={total} nextScreen={"Pagamento"} />
    </Fundo>
  )
}
