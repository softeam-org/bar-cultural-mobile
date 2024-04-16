import { StyleSheet } from "react-native";
import { colors } from "../../Style/vars";

export default StyleSheet.create({
  imgBackground: {
		width: "100%",
		height: "100%",
	},
	imgCover: {
		flex: 1,
		padding:20,
		alignItems:"center",
		backgroundColor:"rgba(400,400,400,0.7)"
	},
  container: {
    backgroundColor: "#fff",
    height: 270,
    width: 350,
    borderRadius: 20,
    justifyContent: "space-around",
    margin: 30,
    padding: 20,
    alignItems: "center",
  },
  txtButton: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonCancel: {
    height: 40,
    width: 310,
    borderRadius: 10,
    backgroundColor: "#E43F09",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 40,
    width: 310,
    borderRadius: 10,
    backgroundColor: "#00AD26",
    alignItems: "center",
    justifyContent: "center",
  },
  txtQuestion: {
    fontSize: 24,
  },
  txtValue: {
    fontSize: 20,
  },
  value: {
    textAlign: "center",
    fontSize: 30,
    height: 41,
    width: 122,
    color: "#E43F09",
    fontWeight: "bold",
  }

})