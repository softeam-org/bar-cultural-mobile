import { StyleSheet } from "react-native"
import {colors} from '../../Style/vars'

export default StyleSheet.create({
  imgBackground:{
    position:'absolute',
    width:'100%',
    height:'100%'
  },
  cover:{
    flex: 1,
		padding:20,
		alignItems:"center",
		backgroundColor:"rgba(400,400,400,0.7)"
  },
  container:{
    width:350,
    height:160,
    backgroundColor:'#fff',
    justifyContent:'space-evenly',
    marginTop:30,
    borderRadius:20,
    paddingHorizontal:20
  },
  titulo:{
    fontSize:20
  },
  input:{
    borderBottomWidth:1,
    borderColor:colors.cinza
  },
  button:{
    width:310,
    height:40,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.verde
  },
  txtButton:{
    fontSize:24,
    color:"#fff"
  }
})