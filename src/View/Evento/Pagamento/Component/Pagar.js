import { View, Text, TouchableOpacity } from "react-native";

import { colors } from "../../../Style/vars";
import style from "../Style/stylePagamento";

export default function Pagar({valor, onPress}){
  
  const handleCancelar = () => {
    onPress(); // Simplesmente chama onPress, que agora só esconde o componente
  };
  
  return(
    <View style={style.confirmContainer}>
      <Text style={style.confirmText}>Aproxime ou insira o cartão para realizar o pagamento.</Text>
      <View style={style.containerVal}>
        <Text style={style.confirmText}>Valor à pagar:</Text>
        <Text style={style.textValConfirm}>{valor}</Text>
      </View>
      <TouchableOpacity style={[style.button, {backgroundColor: colors.laranja1}]} onPress={handleCancelar}>
        <Text style={style.textButton}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  )
}