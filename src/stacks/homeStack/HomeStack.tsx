import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeScreen from '../../screens/Home/HomeScreen';
import DetailsScreen from '../../screens/Details/DetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import BuyScreen from '../../screens/Buy/BuyScreen';
import { theme } from '../../theme/theme';
import { Ic_ArrowLeft } from '../../icons/IconsSvg';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
    screenOptions={({ route, navigation }) => {
        return {
          headerShown: false,
          navigationBarColor: '#000',
        }
      }}
    >
     <Stack.Screen name="HomeScreen" options={{title: 'Home'}} component={HomeScreen} />

    <Stack.Group
     screenOptions={({route, navigation}) => {
        return{ 
            headerShown: true,
            headerStyle: {
                backgroundColor: theme.primary,
                borderBottomColor: '#000',
                borderWidth: 0,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity style={{marginLeft: 20}} activeOpacity={0.8} onPress={() => navigation.goBack()}>
                  <Ic_ArrowLeft size={26} color='#fff'/>
              </TouchableOpacity>
            ),
        }
     }}
    >
        <Stack.Screen name="DetailsCoins" options={{title: ''}} component={DetailsScreen} />
        <Stack.Screen name="BuyCoins" options={{title: 'Buy Coins'}} component={BuyScreen} />
    </Stack.Group>
  </Stack.Navigator>
  )
}

export default HomeStack