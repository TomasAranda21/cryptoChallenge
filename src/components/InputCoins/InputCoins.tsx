import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { InputCoinsStyles } from './styles';
import { theme } from '../../theme/theme';

interface InputCoinsProps {
    value: string;
    onChange: (text: string) => void;
    title: string;
    placeholder: string;
    coins: string,
    editable: boolean

}

const InputCoins = ({value, onChange, title, coins, placeholder, editable}: InputCoinsProps) => {
  return (
    <View style={InputCoinsStyles.cardInput}>
    <Text style={InputCoinsStyles.label}>{title}</Text>
    <View style={InputCoinsStyles.containerInput}>
        <TextInput
        editable={editable}
        style={InputCoinsStyles.InputStyles}
        placeholder={placeholder}
        showSoftInputOnFocus={false}
        placeholderTextColor={theme.darkGrey}
        keyboardType="numeric"
        value={value}
        onChangeText={onChange}
        />
        <Text style={InputCoinsStyles.textCoins}>{coins}</Text>
    </View>
</View>
  )
}

export default InputCoins