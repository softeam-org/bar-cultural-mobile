import { StyleSheet } from "react-native";
import { colors } from "../../Style/vars";

export default StyleSheet.create({
  body: {
		marginHorizontal: 20,
		paddingTop: 10,
	},
	containerOption:{
		backgroundColor: colors.branco,
		borderRadius: 20,
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingVertical: 20
	},
	textOption: {
		fontSize: 20,
		fontWeight: '400',
	},
	buttonOption: {
		alignItems: 'center',
		borderRadius: 10,
		paddingVertical: 2,
		marginTop: 30,
		backgroundColor: colors.verde
	},
	textButton:{
		fontSize: 24,
		fontWeight: '700',
		color: colors.branco,
		lineHeight: 32.68
	}
})