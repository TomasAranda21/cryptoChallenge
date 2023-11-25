import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { LoadingStyles } from './styles'

const LoadingScreen = () => {
  return (
    <View style={LoadingStyles.container}>
        <ActivityIndicator size="large" color="#fff" />
    </View>
  )
}

export default LoadingScreen