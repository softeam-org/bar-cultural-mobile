import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from '@react-navigation/stack';
import Evento from '../View/Evento/EventScreen'
import Estorno from '../View/Estorno/EstornoScreen'
import Login from '../View/Login/LoginScreen'
import Produtos from "../View/Evento/Produto/ProdutoScreen";

const Drawer = createDrawerNavigator()

function MyDrawer() {
	return (
		<Drawer.Navigator initialRouteName="Evento" >
			<Drawer.Screen name="Evento" component={Evento} />
			<Drawer.Screen name="Estorno" component={Estorno} />
      <Drawer.Screen name="Produtos" component={Produtos}/>
		</Drawer.Navigator>
	)
}


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown:false}}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawer" component={MyDrawer} />
    </Stack.Navigator>
  );
}