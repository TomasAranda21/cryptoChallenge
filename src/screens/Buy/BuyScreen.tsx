import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { DefaultLayout } from '../../layout/DefaultLayout'
import NumericKeyboard from '../../components/numbersKeyboard/NumericKeyboard'
import InputCoins from '../../components/InputCoins/InputCoins'
import ButtonCustom from '../../components/button/ButtonCustom'
import { Ic_Refresh2 } from '../../icons/IconsSvg'
import { BuyScreenStyles } from './styles'

const BuyScreen = ({ route }: any) => {
    const [cryptoAmount, setCryptoAmount] = useState<string>('');
    const [localValue, setLocalValue] = useState<string>('');
    const [isCoinsToDollar, setIsCoinsToDollar] = useState<boolean>(true);
  
    const onKeyPress = (value: string) => {
      const newCryptoAmount = cryptoAmount + value;
      setCryptoAmount(newCryptoAmount);
      convertToLocalCurrency(newCryptoAmount);
    };
  
    const onDeletePress = () => {
      const newCryptoAmount = cryptoAmount.slice(0, -1);
      setCryptoAmount(newCryptoAmount);
      convertToLocalCurrency(newCryptoAmount);
    };
  
    const convertToLocalCurrency = (amount: string) => {
      const numericAmount = parseFloat(amount);
      if (!isNaN(numericAmount)) {
        const conversionRate = isCoinsToDollar ? route.params.current_price : 1 / route.params.current_price;
        const value = (numericAmount * conversionRate).toString();
        setLocalValue(value as string);
      } else {
        setLocalValue('0');
      }
    };
  
    const handleToggleCurrency = () => {
      setCryptoAmount('');
      setLocalValue('');
      setIsCoinsToDollar((prev) => !prev);
    };
  
    return (
      <DefaultLayout>
        <Text style={BuyScreenStyles.currentPrice}>Current Price: ${route.params.current_price}</Text>
        
        <InputCoins
          value={cryptoAmount}
          onChange={(text: string) => {
            setCryptoAmount(text);
            convertToLocalCurrency(text);
          }}
          title={ 'From' }
          placeholder={isCoinsToDollar ? `Enter ${route.params.symbol.toUpperCase()} Amount` : 'Enter USD Amount'}
          coins={isCoinsToDollar ? route.params.symbol.toUpperCase() : 'USD'}
          editable={true}
        />
  
        <TouchableOpacity
          style={BuyScreenStyles.buttonChange}
          activeOpacity={0.8}
          onPress={handleToggleCurrency}>
          <Ic_Refresh2 color='#fff' size={26} />
        </TouchableOpacity>
  
        <InputCoins
          value={localValue}
          onChange={(text: string) => {
            setCryptoAmount(text);
            convertToLocalCurrency(text);
          }}
          title={ 'To'}
          placeholder={isCoinsToDollar ? 'Enter USD Amount' : `Enter ${route.params.symbol.toUpperCase()} Amount`}
          coins={isCoinsToDollar ? 'USD' : route.params.symbol.toUpperCase()}
          editable={false}
        />
  
        <View style={BuyScreenStyles.numericContainer}>
          <NumericKeyboard onKeyPress={onKeyPress} onDeletePress={onDeletePress} />
        </View>
        <ButtonCustom text="Buy" onPress={() => console.log('')} />
      </DefaultLayout>
    );
  };
  
  export default BuyScreen;
  