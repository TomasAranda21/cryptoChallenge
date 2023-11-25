import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const LoadingStyles = StyleSheet.create({
    container: {
        backgroundColor: theme.primary, 
        flex: 1, 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})