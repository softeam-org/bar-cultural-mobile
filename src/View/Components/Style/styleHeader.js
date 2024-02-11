import { Dimensions, StyleSheet } from "react-native";

const {height}= Dimensions.get('screen')
export default StyleSheet.create({
  container:{
    flexDirection:'row',
    height:60,
    width:'100%',
    backgroundColor:'#E43F09'
  },
  burguerBar:{
    height:'100%',
    width:'15%',
    alignItems:'center',
    justifyContent:'center',
  },
  containerTitle:{
    height:'100%',
    width: '80%',
    justifyContent:'center',
    paddingLeft:'5%'
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#fff'
  },
    screenDrawer:{
      marginTop:60,
      height:height,
      width:'100%',
      backgroundColor:'rgba(200,200,200,0.7)',
      position:'absolute',
      zIndex:99
    },
    containerDrawer:{
      width:'100%',
      backgroundColor:'#E43F09',
    }

})