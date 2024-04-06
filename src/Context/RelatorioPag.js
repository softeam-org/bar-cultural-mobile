import { createContext, useState } from "react";

export const RelatContex = createContext({});

function TotalProvider({ children }) {
  const [relatorio, setRelatorio] = useState([]);
  const [total, setTotal] = useState('0,00');

  function compra(tot, selec) {
    if (tot !== '' && selec !== '') {
      const relatorioAtualizado = selec.filter(item => item.itens.length > 0) ;
      tot = tot.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',');

      setRelatorio(relatorioAtualizado);
      setTotal(tot);
    }
  }
  
  function altValor(valor) { // vai ser utilizado no componente alterar, para alterar o valor total caso necessário
    valor = valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    setTotal(parseFloat(valor));
  }

  return (
    <RelatContex.Provider value={{ relatorio, total, compra, altValor }}>
      {children}
    </RelatContex.Provider>
  );
}

export default TotalProvider;
