import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const NumericKeyboardStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      row: {
        flexDirection: 'row',
      },
      button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 5,
        borderRadius: 12,
      },
      buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
      },
});