import { StyleSheet } from "react-native";
import { colors } from "../../Style/vars";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center'
  },
  card: {
    width: 350,
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: colors.branco
  },
  linha: {
    flexDirection: 'row',
    width: '90%',
    height: 47,
    alignItems: 'center',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    borderColor: colors.cinza
  },
  txtNormal: {
    fontSize: 20
  },
  txtBold: {
    fontSize: 20,
    fontWeight: '700'
  }
})