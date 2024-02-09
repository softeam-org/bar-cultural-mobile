import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';

import styles from '../Style/styleProduto';
import Seta from '../../../../assets/seta.svg' 

export default function CustomAccordion({title, children}) {
  
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.collapse}>
      <TouchableOpacity onPress={toggleAccordion} >
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
          <Seta width={15} height={15} />
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <View>
          {children}
        </View>
      )}
    </View>
  );
}
