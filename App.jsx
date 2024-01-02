import {StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import MyButton from './compo/button';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function App() {
  const [result, setResult] = useState(" ")
  const handleBtnClick=(e)=>{
    setResult(result+e)
  }
  const handleReset=()=>{
    setResult("")
  }
  const handleBackSpace=()=>{
    setResult(result.substring(0,result.length-1))
  }
  const handelEquals=()=>{
    try{
      setResult((eval(result)).toString())
    }catch(error){
      setResult("ErroR")
    }
  }
  const myIcon = <Icon name="arrow-left" size={25} color="#ffffff"/>;
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40,marginVertical:20,color:'white'}}>Calculator</Text>
      <View style={styles.displayView}>
        <Text style={{fontSize:25}}>{result}</Text>
      </View>
      <View style={styles.btnWrapper}>
        <View style={styles.row}>
          <View>
            <View style={styles.row}>
              <MyButton myStyle={{ width: 145}} onClick={handleReset}>Clear</MyButton>
              <MyButton onClick={handleBackSpace}>{myIcon}</MyButton>
            </View>
            <View style={styles.row}>
              <MyButton onClick={()=>{handleBtnClick(7)}}>7</MyButton>
              <MyButton onClick={()=>{handleBtnClick(8)}}>8</MyButton>
              <MyButton onClick={()=>{handleBtnClick(9)}}>9</MyButton>
            </View>
            <View style={styles.row}>
              <MyButton onClick={()=>{handleBtnClick(4)}}>4</MyButton>
              <MyButton onClick={()=>{handleBtnClick(5)}}>5</MyButton>
              <MyButton onClick={()=>{handleBtnClick(6)}}>6</MyButton>
            </View>
            <View style={styles.row}>
              <MyButton onClick={()=>{handleBtnClick(1)}}>1</MyButton>
              <MyButton onClick={()=>{handleBtnClick(2)}}>2</MyButton>
              <MyButton onClick={()=>{handleBtnClick(3)}}>3</MyButton>
            </View>
          </View>
          <View>
            <MyButton onClick={()=>{handleBtnClick("+")}}>+</MyButton>
            <MyButton onClick={()=>{handleBtnClick("-")}}>-</MyButton>
            <MyButton onClick={()=>{handleBtnClick("*")}}>x</MyButton>
            <MyButton onClick={()=>{handleBtnClick("/")}}>&divide;</MyButton>
          </View>
        </View>
        <View style={styles.row}>
          <MyButton onClick={()=>{handleBtnClick(".")}}>.</MyButton>
          <MyButton onClick={()=>{handleBtnClick(0)}}>0</MyButton>
          <MyButton myStyle={{ width: 145 }} onClick={handelEquals}>=</MyButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a339c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  displayView:{
    backgroundColor:'#8861c9',
    width:320,
    padding:20,
    borderRadius:30,
    marginBottom:10
  },
  btnWrapper:{
    padding:10
  },
  row: {
    flexDirection: 'row'
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    margin: 10
  }
});
