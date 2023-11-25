import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const DetailsScreenSyles = StyleSheet.create({
    containerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 40
    },
    currentPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,

    },
    containerData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flex: 1
    },

    containerDay: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 8,
        marginTop: 16,
        justifyContent: 'center',
        // width: 70,
    },
    containerButtons:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    dataUp: {
        backgroundColor: theme.greenLight,
        minWidth: 180,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2, marginTop: 10,
        paddingHorizontal: 5
    },


    dataDown: {
        backgroundColor: theme.red,
        minWidth: 180,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        marginTop: 10,
        paddingHorizontal: 5
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#fff'
    },
    textPrice: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 30
    },
    textCurrency: {
        color: theme.mediumGrey,
        fontSize: 14
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.mediumGrey

    },
    detail: {
        fontSize: 16,
        marginTop: 8,
        color: '#fff'
    },
});