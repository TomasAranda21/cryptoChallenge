import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '../stacks/homeStack/HomeStack';
import { Ic_Case, Ic_Chart, Ic_RefreshTwoArrow, Ic_Wallet, Ic_home } from '../icons/IconsSvg';
import { theme } from '../theme/theme';

const Tab = createBottomTabNavigator();

export const TabsButton = (props : any) => {
  const onPress = useCallback(() => {
    props.onPress();
}, [props.onPress]);

  return (
  <TouchableOpacity
    onPress={onPress}
    {...props}
    style={{justifyContent: 'center', height: 50, width: '20%', backgroundColor: theme.black }}
    activeOpacity={1}>
      <View style={props.style}>
          {props.children}
      </View>
  </TouchableOpacity>
  )
}

export const AppTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route, navigation } : any) => {
      return {
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#8f8d8f", 
        tabBarActiveBackgroundColor: theme.primary,
        tabBarIcon: ({ color, focused, size} : any) => 
        screenOptionsIcon(route.name, color, 22, focused),
        tabBarButton(props) {
          return <TabsButton {...props}/>
        },
      }
    }}
    >
      <Tab.Screen name="Home" 
      options={({route, navigation}) => {
        return { 
          title: 'Inicio', 
          headerShown: false,
          navigationBarColor: theme.secondary,
      }}}
      component={HomeStack} />
      <Tab.Screen name="Market" component={HomeStack} />
      <Tab.Screen name="Change" component={HomeStack} />
      <Tab.Screen name="Case" component={HomeStack} />
      <Tab.Screen name="Wallet" component={HomeStack} />
    </Tab.Navigator>
  )
}

function screenOptionsIcon(router: string, color:string, size: number, focused: boolean) {
  let iconName;

  if(router === 'Home'){
    iconName = 
    <Ic_home size={size} color={color}/>
  }

  if(router === 'Market'){
    iconName = <Ic_Chart size={size} color={color}  />
  }
  if(router === 'Change'){
    iconName = <Ic_RefreshTwoArrow size={size} color={color}  />
    
  }
  if(router === 'Case'){
    iconName = <Ic_Case size={size} color={color} />
  }
  if(router === 'Wallet'){
    iconName = <Ic_Wallet size={size} color={color}  />
  }

  return  <View>{iconName}</View>
}