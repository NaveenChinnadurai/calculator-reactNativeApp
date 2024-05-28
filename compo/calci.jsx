import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Button from './button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { handleBtnClick, handelEquals, handleBackSpace, handleReset } from '../utils/functions';
export default function Calci() {
    const math = require('mathjs');
    const [result, setResult] = useState("")
    const myIcon = <Icon name="arrow-left" size={25} color="#ffffff" />;
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Calculator</Text>
            <View style={styles.calcBody}>
                <View style={styles.displayView}>
                    <Text style={{ fontSize: 30, textAlign: 'right', color: 'white' }}>{result}</Text>
                </View>
                <View style={styles.btnWrapper}>
                    <View style={styles.row}>
                        <Button myStyle={{ width: "47%" }} onClick={()=>handleReset(setResult)}>Clear</Button>
                        <Button onClick={()=>handleBackSpace(setResult,result)}>{myIcon}</Button>
                        <Button onClick={() => { handleBtnClick("+",setResult,result) }}>+</Button>
                    </View>
                    <View style={styles.row}>
                        <Button onClick={() => { handleBtnClick(7,setResult,result) }}>7</Button>
                        <Button onClick={() => { handleBtnClick(8,setResult,result) }}>8</Button>
                        <Button onClick={() => { handleBtnClick(9,setResult,result) }}>9</Button>
                        <Button onClick={() => { handleBtnClick("-",setResult,result) }}>-</Button>
                    </View>
                    <View style={styles.row}>
                        <Button onClick={() => { handleBtnClick(4,setResult,result) }}>4</Button>
                        <Button onClick={() => { handleBtnClick(5,setResult,result) }}>5</Button>
                        <Button onClick={() => { handleBtnClick(6,setResult,result) }}>6</Button>
                        <Button onClick={() => { handleBtnClick("*",setResult,result) }}>x</Button>
                    </View>
                    <View style={styles.row}>
                        <Button onClick={() => { handleBtnClick(1,setResult,result) }}>1</Button>
                        <Button onClick={() => { handleBtnClick(2,setResult,result) }}>2</Button>
                        <Button onClick={() => { handleBtnClick(3,setResult,result) }}>3</Button>
                        <Button onClick={() => { handleBtnClick("/",setResult,result) }}>&divide;</Button>
                    </View>
                    <View style={styles.row}>
                        <Button onClick={() => { handleBtnClick(".",setResult,result) }}>.</Button>
                        <Button onClick={() => { handleBtnClick(0,setResult,result) }}>0</Button>
                        <Button myStyle={{ width: "47%" }} onClick={()=>handelEquals(setResult,result)}>=</Button>
                    </View>
                </View>
            </View>
            <StatusBar backgroundColor="rgba(6, 0, 23, 1)" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgba(6, 0, 23, 1)',
        justifyContent: 'space-between'
    },
    header: {
        fontSize: 45,
        color: 'white',
        marginTop: 20,
        textAlign: 'center'
    },
    calcBody: {
        height: '80%',
        paddingTop: 20,
    },
    displayView: {
        marginHorizontal: 'auto',
        backgroundColor: '#1C1223',
        borderWidth: 0.3,
        borderColor: '#494949',
        borderRadius: 20,
        height: 100,
        width: "90%",
        padding: 10,
        fontSize: 25,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    btnWrapper: {
        padding: 10,
        gap: 10
    },
    row: {
        flexDirection: 'row',
        width: "100vw",
        justifyContent: "space-evenly"
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        margin: 10
    }
});