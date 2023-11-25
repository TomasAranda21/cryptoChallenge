import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const HeaderHomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginTop: 35,
        justifyContent: 'center'
    },
    titleName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    containerData: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    containerNotifications: {
        width: 28,
        height: 28,
        position: 'relative',
        marginRight: 5
    },
    containerImage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationsCount: {
        backgroundColor: '#d8f476',
        borderRadius: 100,
        width: 19,
        height: 15,
        position: 'absolute',
        top: -5,
        right: -5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    containerDataItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    containerDataAmount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    containerDataAmountUser: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 5
    },
    textDataPercents: {
        color: theme.green,
        fontWeight: '500',
        fontSize: 16

    },
    textData: {
        color: theme.mediumGrey,
        fontWeight: '500', marginTop: 5,
        fontSize: 16
    },
    textAmount: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        marginRight: 10
    },
    textBalance: {
        color: '#fff',
        marginBottom: 10
    },
    textNotifications: {
        fontSize: 12,
        color: theme.black
    },
    imageProfile: {
        width: 50,
        height: 50,
        borderRadius: 100,
    }
});