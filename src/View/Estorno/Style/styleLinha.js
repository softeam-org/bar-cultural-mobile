import { StyleSheet } from "react-native"
import {colors} from "../../Style/vars"

export default StyleSheet.create({
	containerLinha:{
		flexDirection:"row",
		width:"100%",
		height:50,
		alignItems:"center",
		paddingHorizontal:"10%",
		justifyContent:"space-between",
	},
	containerCod:{
		width:"100%",
		height:"100%",
		justifyContent:"center",
		borderBottomWidth:1,
		borderColor: colors.cinza,
	},
	containerCred:{
		flexDirection:"row",
		width:"100%",
		height:"100%",
		alignItems:"center",
		borderBottomWidth:1,
		borderColor: colors.cinza,
		justifyContent:"space-between",
	},
	bold:{
		fontSize:20,
		fontWeight:"700",
	},
	txt:{
		fontSize:17
	},
	touch:{
		width:"100%",
		height:"100%",
		flexDirection:"row",
		alignItems:"center",
		borderBottomWidth:1,
		borderColor: colors.cinza,
		justifyContent:"space-between",
	}
})