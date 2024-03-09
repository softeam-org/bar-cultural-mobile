import { View, Modal } from "react-native";
import { useState, useEffect,  } from "react";

import Footer from "../../Components/Footer";
import TipoPagamento from "./Component/TipoPagamento";
import Fundo from "../../Components/Fundo";
import style from "./Style/stylePagamento";
import ConfirmPag from "./Component/ConfirmePag";

export default function PagamentoScreen(){

  const formasPag = [
    {
      "Icon": "pix",
      "title": "Pix"
    },
    {
      "Icon": "credit-card",
      "title": "Cartão de Crédito"
    },
    {
      "Icon": "pix",
      "title": "Pix"
    },
    {
      "Icon": "credit-card",
      "title": "Cartão de Débito"
    },
    {
      "Icon": "pix",
      "title": "Pix"
    }
  ];

  const [visible, setVisible] = useState(false);
  const [confirmProps,setConfirmProps] = useState([]);

  // pega estado de visible quando o botão cancelar é clicado no componente ConfirmePag
  const handleVisible = (visible) => {
    setVisible(visible)
  }

  //pega icone e titulo da forma de pagamento
  const handlePag = (icon, title)=>{
    setVisible(!visible);
    setConfirmProps([icon, title]);
  };

  return(
    <Fundo tela={'Pagamento'}>
        <View style={style.main}>

          { !visible ? formasPag.map((tipo, index)=>(
            <TipoPagamento Icon={tipo.Icon} tipo={tipo.title} key={index} onPress={() => handlePag(tipo.Icon, tipo.title)}/>
          )) : null}
          
          <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => visible(false)}
          >
           <ConfirmPag tipo={confirmProps[1]} Icon={confirmProps[0]} valor={'20,00'} visible={visible} onPress={handleVisible}/>
          </Modal>
        </View>
       <Footer/>
    </Fundo>
  );
}
