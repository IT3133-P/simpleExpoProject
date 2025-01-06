import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Header from "../com/Header";
import Footer from "../com/Footer";

export default function Home() {

    return (
        <>
            <View style={styles.box1}>
                <Header/>
            </View>
            <View style={styles.box2}>
                <Text style={styles.text}>Wellcome to my Application</Text>
            </View>
            <View style={styles.box3}>
                <Footer valueSending={'My name is Minindu'}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    box1: {
        flex: 1,
        backgroundColor: 'green',
        width:'100%'
    },
    box2: {
        flex: 4,
        backgroundColor: 'red',
        width:'100%',
        justifyContent: 'center',

    },
    box3: {
        flex: 1,
        backgroundColor: 'blue',
        width:'100%'
    },
    text:{
        textAlign:'center'
    }
})


