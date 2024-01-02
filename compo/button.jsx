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
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#24025e',
    marginVertical: 5,
    marginHorizontal: 3,
  },
  txt:{
    fontSize: 30,
    color:'white',
    fontWeight: 'bold'
  }
})
