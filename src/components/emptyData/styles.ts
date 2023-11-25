// 

import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const EmptyDataStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 60,
        width: '90%',
        alignSelf: 'center'
    },
    subtitle: {
        color: theme.mediumGrey,
        textAlign: 'center',
        marginTop: 5
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 30
    }

})