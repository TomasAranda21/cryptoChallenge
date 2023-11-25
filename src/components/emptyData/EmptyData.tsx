import { View, Text, Image } from 'react-native'
import React from 'react'
import { EmptyDataStyles } from './styles'

const EmptyData = () => {
    return (
        <View style={EmptyDataStyles.container}>
            <Text style={EmptyDataStyles.title}>No connection</Text>
            <Text style={EmptyDataStyles.subtitle}>Oops! It seems you're currently offline. Please check your internet connection and try again.</Text>
        </View>
    )
}
export default EmptyData