import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const ButtonActionsStyles = StyleSheet.create({
    container: {
        width: '32%', 
        alignItems: 'center', 
        marginHorizontal: '.8%',
        alignSelf: 'center',
        backgroundColor: theme.mediumGrey, 
        padding: 12, 
        borderRadius: 8,
        borderColor: theme.blue,
        borderWidth: 1
    },
    text: {
        fontSize: 16, 
        color: '#000'
    }

})