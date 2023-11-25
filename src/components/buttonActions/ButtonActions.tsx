import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { theme } from '../../theme/theme'
import { ButtonActionsStyles } from './styles'

const ButtonActions = ({text} : {text: string}) => {
  return (
    <TouchableOpacity style={ButtonActionsStyles.container}
    onPress={() => console.log('')} activeOpacity={0.8}>
      <Text style={ButtonActionsStyles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonActions