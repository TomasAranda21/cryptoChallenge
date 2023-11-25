import React from 'react'
import { View, KeyboardAvoidingView, StatusBar } from 'react-native'
import { theme } from '../theme/theme';
import { DefaultLayoutStyles } from './styles';


export const DefaultLayout = ({children}: {children: React.ReactNode}) => {

  return (
    <KeyboardAvoidingView style={DefaultLayoutStyles.container}>
    <StatusBar hidden={false} backgroundColor={theme.primary} translucent barStyle='light-content' />
    <View style={DefaultLayoutStyles.ViewContainer}>
        {children}
    </View>
    </KeyboardAvoidingView>
  )
}


