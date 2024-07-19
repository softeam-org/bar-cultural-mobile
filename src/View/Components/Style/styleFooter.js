import { StyleSheet } from "react-native"
import {colors} from "../../Style/vars"

export default StyleSheet.create({
	containerFooter:{
		width:"100%",
		height:60,
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between",
		backgroundColor:colors.laranja1
	},
	backScreen:{
		width:"25%",
		height:"100%",
		alignItems:"center",
		justifyContent:"center",
	},
	valor:{
		width:"50%",
		height:"100%",
		alignItems:"center",
		justifyContent:"center"
	},
	nextScreen:{
		width:"25%",
		height:"100%",
		alignItems:"center",
		justifyContent:"center",
    
	},
	button:{
		height:50,
		width:50,
		borderRadius:1000,
		alignItems:"center",
		justifyContent:"center",
		backgroundColor:colors.preto
	},
	txt:{
		fontSize:20,
		color:colors.branco
	}
})