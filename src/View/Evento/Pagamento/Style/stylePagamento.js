import { StyleSheet } from "react-native"
import { colors } from "../../../Style/vars"

export default StyleSheet.create({
  
  main:{
    alignItems: 'center',
    flex: 1,
    width: '100%',
    paddingVertical: 15
  },
  tipoContainer: {
    alignItems: "center",
    flexDirection: 'row',
    paddingVertical: 24,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: 350,
    borderRadius: 20,
    marginVertical: 10
  },
  tipoText:{
    fontSize: 24,
    fontWeight: '400',
    marginLeft: 10
  },
  confirmBody: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    flex: 1,
    height: '100%',
    backgroundColor: "#D9D9D9B3",
  },
  confirmContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '95%',
    borderRadius: 20

  },
  confirmText: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginHorizontal: 10
  },
  tipoText:{
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 10
  },
  confirmTipo:{
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10
  },
  textValConfirm: {
    color: colors.laranja1,
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 10
   },
   containerVal:{
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
   },
   Containerbutton: {
    width: "100%",
   },
   button:{
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",

   },
   textButton:{
    color: 'white',
    fontSize: 24,
    fontWeight: '700'
   },
   valAlterar: {
    color: colors.laranja1,
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 20,
    minWidth: 50,
   },
   valAlterarContainer: {
    flexDirection: 'row'
   }
})