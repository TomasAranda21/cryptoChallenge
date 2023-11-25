import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export const DefaultLayoutStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.primary,
        height: '100%'
      },
    ViewContainer: {
        flex: 1, 
        marginTop: 0, 
        backgroundColor: theme.primary, 
        paddingHorizontal: 20, 
        paddingBottom: 70
      },
   
});