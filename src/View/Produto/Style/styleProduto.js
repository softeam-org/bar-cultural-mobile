import { StyleSheet } from "react-native";


 export default StyleSheet.create({
  collapse: {
    width: 350,
    marginVertical: 5,
  },
  headerCollapse: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#E43F09',
    paddingHorizontal: 40,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center'
  },
  headerText: {
    fontWeight: '700',
    color: 'white',
    width: "100%",
    textAlign: 'center',
    fontSize: 24
  },
  expanded:{
    backgroundColor: 'white',
    padding: 15,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20
  },
  body: {
    marginHorizontal: 20,
    paddingTop: 10,
  },
  selecao:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  itemContainer: {
    borderTopColor: "#D9D9D9",
    borderTopWidth: 1,
    paddingVertical: 10
  },
  qtdItens:{
    flexDirection: 'row',
    width: 132,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemTitle:{
    fontSize: 20,
    fontWeight: '400'
  },
  qtdValue:{
    backgroundColor: '#D9D9D9',
    width: 60,
    height: 40,
    textAlign:'center',
    textAlignVertical: 'center',
    borderRadius: 10,
    flexDirection: 'column'
  },
  textValue: {
    color: '#E43F09',
    fontWeight: "700",
    fontSize: 24
  },
});
