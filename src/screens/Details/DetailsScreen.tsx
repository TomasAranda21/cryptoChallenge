import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { DefaultLayout } from '../../layout/DefaultLayout'
import { TextInput, Button } from 'react-native';
import { CoinData } from '../../interface/dataCrypto';
import { Ic_ArrowDown, Ic_ArrowDownBold, Ic_ArrowLeft, Ic_ArrowRight, Ic_ArrowUp, Ic_ArrowUpBold } from '../../icons/IconsSvg';
import { theme } from '../../theme/theme';
import ButtonCustom from '../../components/button/ButtonCustom';
import { DetailsScreenSyles } from './styles';


const DetailsScreen = ({ route, navigation }: any) => {
  const [coins, setCoins] = useState<CoinData>({} as CoinData)

  useEffect(() => {
    setCoins(route.params.coinsDetails)
  }, [route.params])
  // Función para convertir la cantidad de criptomoneda a moneda local

  return (
    <DefaultLayout>
      <View style={DetailsScreenSyles.containerTitle}>
        <Image source={{ uri: coins.image }} style={{ width: 50, height: 50, marginRight: 10 }} />
        <View>
          <Text style={DetailsScreenSyles.title}>{`${coins.name}`}</Text>
          <Text style={DetailsScreenSyles.subtitle}>Market Cap Rank: {`#${coins.market_cap_rank}`}</Text>
        </View>
      </View>

      <View style={DetailsScreenSyles.containerData}>
        <View>
          <Text style={DetailsScreenSyles.textPrice}>${coins.current_price}<Text style={DetailsScreenSyles.textCurrency}>{' '}USD</Text></Text>
          <View style={coins?.price_change_percentage_24h < 0 ? DetailsScreenSyles.dataDown : DetailsScreenSyles.dataUp}>
            {coins?.price_change_percentage_24h < 0 ? 
            <Ic_ArrowDownBold size={18} color={coins?.price_change_percentage_24h < 0 ? '#fff' : theme.black} />
            : <Ic_ArrowUpBold size={18}  color={coins?.price_change_percentage_24h < 0 ? '#fff' : theme.black} />}
            <Text style={{ color: coins?.price_change_percentage_24h < 0 ? '#fff' : theme.black, fontSize: 14, fontWeight: '500' }}>{`$${coins.price_change_24h?.toFixed(4)} (${coins?.price_change_percentage_24h?.toFixed(2)}%)`} Today</Text>
          </View>
        </View>
        <View style={DetailsScreenSyles.containerDay}>
          <Text style={{ color: '#fff' }}>Day</Text>
          <Ic_ArrowDown size={18} color='#fff' />
        </View>
      </View>

      <View style={DetailsScreenSyles.containerButtons}>
        <View style={{ width: '45%' }}>
          <ButtonCustom text="Buy" onPress={() => navigation.navigate('BuyCoins', { current_price: coins.current_price, symbol: coins.symbol })} />
        </View>
        <View style={{ width: '45%' }}>
          <ButtonCustom text="Sell" onPress={() => navigation.navigate('BuyCoins', { current_price: coins.current_price, symbol: coins.symbol })} />
        </View>

      </View>
    </DefaultLayout>
  )
}

export default DetailsScreen