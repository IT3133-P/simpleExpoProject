import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {

    const navigation = useNavigation()

    function greeting() {
        console.log('Hi')
    }

    return(
        <View style={styles.container}>
            <Button style={styles.button} onPress={() => navigation.navigate('profile')}>Profile</Button>
            <Button style={styles.button} onPress={() => navigation.navigate('course')}>COurse</Button>
            <Button style={styles.button} onPress={() => navigation.navigate('subject')}>Subject</Button>
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