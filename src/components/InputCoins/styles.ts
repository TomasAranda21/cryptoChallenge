import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const InputCoinsStyles = StyleSheet.create({
    InputStyles: {
        backgroundColor: theme.secondary,
        width: '90%',
        borderRadius: 4,
        paddingHorizontal: 2,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderColor: theme.darkGrey,
    },

    cardInput: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: theme.darkGrey,
        backgroundColor: theme.secondary,
        width: '100%',
        marginVertical: 10,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    label: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'left',
        marginVertical: 10,
        marginTop: 0
    },

    containerInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10
    },

    textCoins: {
        fontSize: 14,
        color: '#fff',
    }
})