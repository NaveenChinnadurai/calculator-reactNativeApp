import { Pressable, Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';
import { useState } from 'react';
import Loading from './loading';
export default function MyButton({ children, myStyle, onClick }) {
  const [fontsLoaded] = useFonts({
    'Poppins_400Regular': require('../assets/fonts/Poppins_400Regular.ttf')
  });
  fontsLoaded;
  const [bg, setBg] = useState('#0D0017')
  const onPress = () => {
    onClick();
    setBg('#B3B3B3')
    setTimeout(() => {
      setBg('#0D0017')
    }, 50);
  }
  return (
    <Pressable style={[style.button, myStyle, { backgroundColor: bg }]} onPress={onPress}>
      <Text style={style.txt}>{children}</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  button: {
    width: "23%",
    paddingVertical: 15,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'gray',
  },
  txt: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Poppins_400Regular'
  }
})
