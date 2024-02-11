import { createStackNavigator } from '@react-navigation/stack';

import Login from '../View/Login/LoginScreen'
import Evento from '../View/Evento/EventScreen'
import Estorno from '../View/Estorno/EstornoScreen'
import { ImageBackground } from 'react-native';

const Stack = createStackNavigator()

export default function MyStack() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Eventos" component={Evento} />
        <Stack.Screen name="Estorno" component={Estorno} />
      </Stack.Navigator>
  );

}