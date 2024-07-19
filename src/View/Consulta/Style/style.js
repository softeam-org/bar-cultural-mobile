import { StyleSheet } from "react-native";
import { colors } from "../../Style/vars";

export default StyleSheet.create({
  img: {
    height: "100%",
    width: "auto",
  },
  fundo: {
    backgroundColor: "rgba(500,500,500,0.7)",
    flex: 1,
    alignItems: "center",

  },
  container: {
    backgroundColor: "#fff",
    height: 180,
    width: 350,
    borderRadius: 20,
    justifyContent: "space-around",
    margin: 30,
    paddingLeft: 20,
  },
  button: {
    height: 40,
    width: 310,
    borderRadius: 10,
    backgroundColor: "#00AD26",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    borderBottomWidth: 1,
    fontSize: 16,
    borderColor: colors.cinza,
  },
  text: {
    fontSize: 20,
  },
  txtButton: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  }
})

