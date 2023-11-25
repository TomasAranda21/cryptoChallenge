import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export const TabsStyles = StyleSheet.create({
    withOutTabBar: {
        display: 'none'
    },
    withTaBar: {
        position: 'absolute',
        borderColor: theme.mediumGrey,
        bottom: 25,
        left: 14,
        right: 14,
        elevation: 3,
        borderRadius: 30,
        backgroundColor: theme.black,
        height: 58,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: theme.mediumGrey,
        shadowOpacity: 0.3,
        paddingHorizontal: 8,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1.5,
        borderTopColor: theme.mediumGrey
    },
    tabBarItemStyle: {
        height: 58,
        marginVertical: 8,
        marginHorizontal: 3,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        marginTop: 6
    },
    containerButton: {
        justifyContent: 'center', 
        height:54, 
        flex: 1, 
        borderRadius: 40 
    }

})