import {Pressable, Text, StyleSheet } from 'react-native'

export default function MyButton({ children, myStyle, onClick }) {
  return (
    <Pressable style={[style.button,myStyle]} onPress={onClick}>
      <Text style={style.txt}>{children}</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  button: {
    width:"23%",
    paddingVertical:20,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#0D0017',
    borderWidth:0.1,
    borderColor:'white'
  },
  txt:{
    fontSize: 30,
    color:'white',
    fontWeight: 'bold'
  }
})
