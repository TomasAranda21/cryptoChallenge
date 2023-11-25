import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { NumericKeyboardStyles } from './styles';
import { Ic_TagCross } from '../../icons/IconsSvg';

interface NumericKeyboardProps {
  onKeyPress: (value: string) => void;
  onDeletePress: () => void;
}

const NumericKeyboard = ({ onKeyPress, onDeletePress} : NumericKeyboardProps) => {
  const renderButton = (value: string | JSX.Element, onPress: () => void, cross?: boolean) => (
    <TouchableOpacity activeOpacity={0.7} style={NumericKeyboardStyles.button} onPress={onPress}>
      {cross ? value : <Text style={NumericKeyboardStyles.buttonText}>{value}</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={NumericKeyboardStyles.container}>
      <View style={NumericKeyboardStyles.row}>
        {renderButton('1', () => onKeyPress('1'))}
        {renderButton('2', () => onKeyPress('2'))}
        {renderButton('3', () => onKeyPress('3'))}
      </View>
      <View style={NumericKeyboardStyles.row}>
        {renderButton('4', () => onKeyPress('4'))}
        {renderButton('5', () => onKeyPress('5'))}
        {renderButton('6', () => onKeyPress('6'))}
      </View>
      <View style={NumericKeyboardStyles.row}>
        {renderButton('7', () => onKeyPress('7'))}
        {renderButton('8', () => onKeyPress('8'))}
        {renderButton('9', () => onKeyPress('9'))}
      </View>
      <View style={NumericKeyboardStyles.row}>
        {renderButton('.', () => onKeyPress('.'))}
        {renderButton('0', () => onKeyPress('0'))}
        {renderButton(<Ic_TagCross color='#fff' size={25}/>, onDeletePress, true)}
      </View>
    </View>
  );
};


export default NumericKeyboard;