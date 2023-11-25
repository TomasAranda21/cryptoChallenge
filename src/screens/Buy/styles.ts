import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const BuyScreenStyles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left',
        marginVertical: 20
    },
    currentPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,

    },
    numericContainer: {
        height: '36%', 
        justifyContent: 'flex-end', 
        marginBottom: 40
    },

    buttonChange: {
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: theme.greenMedium,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 2
    }
});