import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Ic_Notification, Ic_eye, Ic_eyeSplash } from '../../icons/IconsSvg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ButtonActions from '../buttonActions/ButtonActions'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderHomeStyles } from './styles'

const HeaderHome = () => {
    const insets = useSafeAreaInsets();
    const [seeAmount, setSeeAmount] = useState(false)

    return (
        <View style={{ marginTop: insets.top + 10 }}>
            <View style={HeaderHomeStyles.containerDataItem}>
                <View style={HeaderHomeStyles.containerImage}>
                    <Image source={require('../../../assets/images/profile.jpg')} style={HeaderHomeStyles.imageProfile} />
                    <Text style={HeaderHomeStyles.titleName}>Hi, Tomás</Text>
                </View>

                <View style={HeaderHomeStyles.containerNotifications}>
                    <Ic_Notification size={28} color='#fff' />
                    <View style={HeaderHomeStyles.notificationsCount}>
                        <Text style={HeaderHomeStyles.textNotifications}>7</Text>
                    </View>
                </View>
            </View>

            <Text style={HeaderHomeStyles.textBalance}>Total Balance {'(USD)'}</Text>
            <View style={HeaderHomeStyles.containerDataAmountUser}>
                <View style={HeaderHomeStyles.containerDataAmount}>
                    <Text style={HeaderHomeStyles.textAmount}>{!seeAmount ? '$*****' : '$1,200.00'}</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setSeeAmount(!seeAmount)}>
                        {!seeAmount ? <Ic_eyeSplash size={22} color='#fff' /> :
                            <Ic_eye size={22} color='#fff' />
                        }
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={HeaderHomeStyles.textDataPercents}>+112%</Text>
                    <Text style={HeaderHomeStyles.textData}>+$869.19</Text>
                </View>
            </View>

            <View style={HeaderHomeStyles.containerButtons}>
                <ButtonActions text='Trade' />
                <ButtonActions text='Deposit' />
                <ButtonActions text='Withdraw' />
            </View>

            <Text style={HeaderHomeStyles.title}>Market</Text>
        </View>
    )
}

export default HeaderHome