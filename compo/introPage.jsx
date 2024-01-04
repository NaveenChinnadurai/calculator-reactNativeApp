import { StyleSheet, Image, View ,Text ,StatusBar} from 'react-native'
import React from 'react'

export default function IntroPage() {
    const icon = require('../assets/introIcon.png')
    return (
        <View style={styles.introContainer}>
            <StatusBar backgroundColor="#ffffff"/>
            <Image source={icon} style={styles.image}/>
            <Text style={styles.txt}>Developed by Naveen Chinnadurai</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    introContainer:{
        justifyContent:'space-evenly',
        height:'100%'
    },
    image:{
        width:'100%',
        height:300,
        marginVertical:50
    },
    txt:{
        textAlign:'center',
        marginTop:50,
        color:'#7a797a'
    }
})