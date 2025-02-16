import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Footer({ valueSending }) {// get value that comming from tha all page

    const paramSending = valueSending

    const navigation = useNavigation()

    function greeting() {
        console.log('Hi')
    }

    return(
        <View style={styles.container}>
            <Button style={styles.button} onPress={() => navigation.navigate('profile', paramSending)}>Profile</Button> {/*value will be sent to the component as route params*/}
            <Button style={styles.button} onPress={() => navigation.navigate('course', paramSending)}>COurse</Button> {/*value will be sent to the component as route params*/}
            <Button style={styles.button} onPress={() => navigation.navigate('subject', paramSending)}>Subject</Button> {/*value will be sent to the component as route params*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        padding:10,
        justifyContent:'space-between'
    },
    button:{
        backgroundColor:'black'
    }
})