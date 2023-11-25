import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const CardCoinsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    CardCrypto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: theme.darkGrey,
        backgroundColor: theme.secondary,
        width: '100%',
        marginHorizontal: 'auto',
        marginVertical: 8,
        alignSelf: 'center',
        borderRadius: 12

    },
    containerImage: {
        width: 45,
        height: 45,
        borderRadius: 100,
        marginRight: 10,
        borderColor: theme.mediumGrey,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    containerData: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    textPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    textSymbol: {
        fontSize: 14,
        color: theme.mediumGrey,
        marginLeft: 12,
        marginTop: 5
    },

    textPercent: {
        fontSize: 14,
        marginTop: 5,
        textAlign: 'right'
    }
})