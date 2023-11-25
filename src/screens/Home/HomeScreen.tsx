import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '../../layout/DefaultLayout'
import Axios from 'axios'
import { CoinData } from '../../interface/dataCrypto'
import CardCoins from '../../components/cardCoints/CardCoins'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HeaderHome from '../../components/headerHome/HeaderHome'
import EmptyData from '../../components/emptyData/EmptyData'
import LoadingScreen from '../../components/loading/LoadingScreen'

const HomeScreen = ({ navigation }: any) => {
  const [dataCrypto, setDataCrypto] = useState<CoinData[]>([])
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const getDataCrypto = async () => {
    setLoading(true)
    try {
      const response = await Axios(`https://pluriza.s3.us-east-1.amazonaws.com/response.json`);
      // console.log('===>', response.data);
      setDataCrypto(response.data as CoinData[]);
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 300)
    }
  }

  useEffect(() => {
    getDataCrypto()
  }, [])

  if (loading) return (<LoadingScreen/>)

  return (
    <DefaultLayout>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={HeaderHome}
        data={dataCrypto}
        ListEmptyComponent={() => <EmptyData/>}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (<CardCoins item={item} navigation={navigation} />)}
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true)
          getDataCrypto()
          setRefreshing(false)
        }}
      />
    </DefaultLayout>
  )
}

export default HomeScreen

