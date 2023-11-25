import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/homeStack/HomeStack';
import { Ic_Case, Ic_Chart, Ic_RefreshTwoArrow, Ic_Wallet, Ic_home } from '../icons/IconsSvg';
import { theme } from '../theme/theme';
import { TabsStyles } from './styles';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const TabsButton = (props : any) => {
  const onPress = useCallback(() => {
    props.onPress();
}, [props.onPress]);

  return (
  <TouchableOpacity
    onPress={onPress}
    disabled={props.to !== '/Home' ? true : false}
    {...props}
    style={TabsStyles.containerButton}
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
      screenOptions={({ route }) => {
      return {
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: theme.grey, 
        tabBarItemStyle: TabsStyles.tabBarItemStyle,
        tabBarIcon: ({ color} : {color:string}) =>  screenOptionsIcon(route.name, color, 22),
        tabBarButton(props) { return <TabsButton {...props}/>},
      }
    }}
    >
      <Tab.Screen name="Home" options={({route}) =>  {
        const routeName = getFocusedRouteNameFromRoute(route);
        return {
          tabBarStyle: routeName === 'HomeScreen' || !routeName  ? TabsStyles.withTaBar : TabsStyles.withOutTabBar
        }
      }} component={HomeStack} />
      <Tab.Screen name="Market" component={HomeStack} />
      <Tab.Screen name="Change" component={HomeStack} />
      <Tab.Screen name="Case" component={HomeStack} />
      <Tab.Screen name="Wallet" component={HomeStack} />
    </Tab.Navigator>
  )
}

function screenOptionsIcon(router: string, color: string, size: number) {
  let iconName;

  switch (router) {
    case 'Home':
      iconName = <Ic_home size={size} color={color} />;
      break;
    case 'Market':
      iconName = <Ic_Chart size={size} color={color} />;
      break;
    case 'Change':
      iconName = <Ic_RefreshTwoArrow size={size} color={color} />;
      break;
    case 'Case':
      iconName = <Ic_Case size={size} color={color} />;
      break;
    case 'Wallet':
      iconName = <Ic_Wallet size={size} color={color} />;
      break;
    default:
      iconName = null;
  }

  return <View>{iconName}</View>;
}