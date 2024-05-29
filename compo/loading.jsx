import React from 'react'
import { Text, View } from 'react-native';
function Loading() {
    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: '100%' }}>
            <Text style={{ color: 'white', width: 'fit-content', fontSize: 25, fontWeight: 500, letterSpacing: 5 }}>Loading...</Text>
        </View>
    )
}

export default Loading