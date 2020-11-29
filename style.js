import { StyleSheet, TouchableWithoutFeedback } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: "80%",
        height: 40,
        border: "1px solid black",
        paddingLeft: 20,
    },
    btn: {
        backgroundColor: "purple",
        width: 150,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        color: "white",
        fontSize: 18,
    },
    card: {
        color: "white",
        width: "80%",
        height:100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

    }
});


export default styles;