import { View, Text, TouchableOpacity} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react";

import { colors } from "../../../Style/vars";
import style from '../Style/stylePagamento'
import Pagar from "./Pagar"
import Alterar from "./Alterar";


export default function ConfirmPag({tipo, Icon, valor, onPress, visible}){

  const handleCancelar = () => {
    // Chama onPress com o valor oposto de visible
    onPress(!visible);
  };
  
  const [visiblePagar, setVisiblePagar] = useState(false)
  const [visibleAlt, setVisibleAlt] = useState(false)
  const [val, setVal] = useState(valor)

  const handlePagar = () => {
    setVisiblePagar(!visiblePagar)
  }
  const handleAlt = (valorProps, visibleProps) =>{
    setVisibleAlt(visibleProps)
    valorProps != '' || null ? setVal(valorProps) : null
  }

  return(
    <View style={style.confirmBody}>
      { !visiblePagar && !visibleAlt ? (<View style={style.confirmContainer}>
        <Text style={style.confirmText}>Forma de Pagamento:</Text>
        <View style={style.confirmTipo}>
          <MaterialIcons name={Icon} size={30} color={'black'}/>
          <Text style={style.tipoText}>{tipo}</Text>
        </View>
        <View style={style.containerVal}>
          <Text style={style.confirmText}>Valor a pagar:</Text>
          <Text style={style.textValConfirm}>R$ {val}</Text>
        </View>
        <View style={style.Containerbutton}>
          <TouchableOpacity style={[style.button, {backgroundColor: colors.verde}]} onPress={handlePagar}>
            <Text style={style.textButton}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.button, {backgroundColor: colors.preto}]} onPress={() => handleAlt(val, !visibleAlt)}>
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