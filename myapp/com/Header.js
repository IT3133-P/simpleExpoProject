import { Text } from "react-native-paper";
import { Image, Dimensions, StyleSheet } from "react-native";


export default function Header() {

    return(
        <>
            <Image 
                source={require('../assets/adaptive-icon.png')}
                width={Dimensions.get('window').width}
                style={styles.container}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%'
    }
})