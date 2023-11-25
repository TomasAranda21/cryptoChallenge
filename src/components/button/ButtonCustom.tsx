import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ButtonCustomStyles } from './styles';

interface ButtonCustomProps {
  text: string;
  onPress: () => void;

}

const ButtonCustom = ({text, onPress}: ButtonCustomProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={ButtonCustomStyles.container}
    onPress={onPress}>
      <Text style={ButtonCustomStyles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCustom