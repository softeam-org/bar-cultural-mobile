import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Animated } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import styles from "../Style/styleProduto"
// import Seta from "../../../../../assets/seta.svg" 

export default function Produto({title, children}) {
  
	const [isExpanded, setIsExpanded] = useState(false)
	const [animation] = useState(new Animated.Value(0))
	const [rotateAnimation] = useState(new Animated.Value(0))

	/*----------- Armazena as quantidades de cada item ----------------*/

	const [quantidades, setQuantidades] = useState({}) 
	const handleQuantidadeChange = (titulo, stateQuantidade) => {
		setQuantidades({ ...quantidades, [titulo]: stateQuantidade })
	}

	/* --------------------------------------------------------------- */

	const toggleAccordion = () => {
		setIsExpanded(!isExpanded) // Atualiza estado do componente
	} 

	useEffect(() => {
		Animated.timing(animation, {
			toValue: isExpanded ? 1 : 0,
			duration: 400,
			useNativeDriver: false,
		}).start()

		Animated.timing(rotateAnimation, {
			toValue: isExpanded ? 1 : 0,
			duration: 200,
			useNativeDriver: false,
		}).start()
	}, [isExpanded])

	const rotate = rotateAnimation.interpolate({
		inputRange: [0, 1],
		outputRange: ["180deg", "0deg"]
	})

	return (
		<View style={styles.collapse}>
			<TouchableOpacity onPress={toggleAccordion}>
				<View style={{...styles.headerCollapse, borderRadius: isExpanded ? 0 : 20}}> 
					<Text style={styles.headerText}>{title}</Text>
					<Animated.View style={{ transform: [{ rotate }],height:50,justifyContent:"center",alignItems:"center" }}>
						<MaterialIcons name="keyboard-arrow-down" size={45} color="#fff" />
					</Animated.View>
				</View>
			</TouchableOpacity>

			{isExpanded && (
				<View style={styles.expanded}>
					{/* Mapeia os itens e passa o estado da quantidade  */}
					{React.Children.map(children, child => {
						return React.cloneElement(child, {
							stateQuantidade: quantidades[child.props.title] || "00",
							onQuantidadeChange: handleQuantidadeChange //Passa a função para atualizar as quantidades
						})
					})}
				</View>
			)}
		</View>
	)
}
