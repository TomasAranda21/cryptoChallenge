import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CardCointsStyles } from './styles'
import { CoinData } from '../../interface/dataCrypto'
import { theme } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'

const CardCoins = ({item, navigation}:{item:CoinData, navigation: any}) => {
  const priceChangePercentage24h = ((item.current_price - item.low_24h) / item.low_24h) * 100;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('DetailsCoins', {coinsDetails: item})} style={CardCointsStyles.CardCrypto}>
    <View style={CardCointsStyles.containerData}>
        <Image source={{uri: item.image}} style={{width: 30, height: 30}} />
        <View >
          <Text style={CardCointsStyles.textTitle}>{item.name}</Text>
          <Text style={CardCointsStyles.textSymbol}>{item.symbol}</Text>
        </View>
    </View>
    <View>
      <Text style={CardCointsStyles.textPrice}>${item.current_price}</Text>
      <Text style={{color: item.price_change_percentage_24h > 0 ? theme.green : theme.red, ...CardCointsStyles.textPercent}}>
      {item.price_change_percentage_24h > 0 ? '+' : '-'}{priceChangePercentage24h.toFixed(2)}%
      </Text>
    </View>
</TouchableOpacity>
  )
}

export default CardCoins