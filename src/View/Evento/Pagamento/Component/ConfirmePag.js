import { View, Text, TouchableOpacity} from "react-native"
import { FontAwesome6 } from "@expo/vector-icons"
import { useState, useContext } from "react";

import { colors } from "../../../Style/vars";
import style from '../Style/stylePagamento'
import Pagar from "./Pagar"
import Alterar from "./Alterar";
import {RelatContex  } from '../../../../Context/RelatorioPag'


export default function ConfirmPag({tipo, Icon, valor, onPress, visible}){
  const { altValor, total} = useContext(RelatContex)

  const handleCancelar = () => {
    // Chama onPress com o valor oposto de visible
    onPress(!visible);
  };
  
  const [visiblePagar, setVisiblePagar] = useState(false)
  const [visibleAlt, setVisibleAlt] = useState(false)

  const handlePagar = () => {
    setVisiblePagar(!visiblePagar)
  }
  const handleAlt = (valorProps, visibleProps) =>{
    setVisibleAlt(visibleProps)
    valorProps !== '' || null ? altValor(valorProps) : null // passo o valor alterado para o context
  }

  return(
    <View style={style.confirmBody}>
      { !visiblePagar && !visibleAlt ? (<View style={style.confirmContainer}>
        <Text style={style.confirmText}>Forma de Pagamento:</Text>
        <View style={style.confirmTipo}>
          <FontAwesome6 name={Icon} size={30} color={'black'}/>
          <Text style={style.tipoText}>{tipo}</Text>
        </View>
        <View style={style.containerVal}>
          <Text style={style.confirmText}>Valor a pagar:</Text>
          <Text style={style.textValConfirm}>R$ {total}</Text>
        </View>
        <View style={style.Containerbutton}>
          <TouchableOpacity style={[style.button, {backgroundColor: colors.verde}]} onPress={handlePagar}>
            <Text style={style.textButton}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.button, {backgroundColor: colors.preto}]} onPress={() => handleAlt(valor, !visibleAlt)}>
            <Text style={style.textButton}>Alterar Valor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.button, {backgroundColor: colors.laranja1}]} onPress={handleCancelar}>
            <Text style={style.textButton}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>) : null}
      {visiblePagar ? (
        <Pagar
          valor={valor}
          onPress={() => setVisiblePagar(false)}
        />
      ) : null}
      {visibleAlt ? (<Alterar visibleAlt={visibleAlt } onPress={handleAlt}/>) : null}
    </View>
  )
}