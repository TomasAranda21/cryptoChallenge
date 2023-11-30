import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const ButtonCustomStyles = StyleSheet.create({
    container: {
        backgroundColor: theme.yellow, 
        width: '99%', 
        height: 50, 
        justifyContent: 'center', 
        borderRadius: 12, 
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center', 
        fontSize: 18, 
        fontWeight: '500',
        color: theme.black
    }

})