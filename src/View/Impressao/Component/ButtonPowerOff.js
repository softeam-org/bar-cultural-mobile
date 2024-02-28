import { Text, View, TouchableOpacity} from "react-native"
import style from "../Style/style"

import { colors } from "../../Style/vars"

export default function ButtonPoweroff({estado, onPress}){

  return(
    <View>
      <TouchableOpacity 
        style={[style.buttonOption, { backgroundColor: estado ? colors.verde : colors.laranja1 }]} 
        onPress={onPress}
      >
        <Text style={style.textButton}>{estado ? 'Ativar' : 'Desativar'}</Text>
      </TouchableOpacity>
    </View>
)
}