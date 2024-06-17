import { createContext, useState, useEffect } from "react";

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
  useEffect(() => {
    console.log(' -----------------**********************************-----------------------');
    console.log('relatorioContext: ', relatorio);
    relatorio.map((prod, index) => {
      console.log('\n>>>>>>>>>>>>>> ', prod.titulo, ' <<<<<<<<<<<<<<<<<<<')
      prod.itens.map((iten, ind) => {
        console.log(iten);
      });
    });
    console.log('\n >>>>> total: ', total);

  }, [total]);

  function altValor(valor) { // vai ser utilizado no componente alterar, para alterar o valor total caso necessário
    const valorFloat = valor.toString().replace('.', ',');

    setTotal(valorFloat);
  }

  return (
    <RelatContex.Provider value={{ relatorio, total, compra, altValor }}>
      {children}
    </RelatContex.Provider>
  );
}

export default TotalProvider;
