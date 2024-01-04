import { StyleSheet, View } from 'react-native';
import { useState, } from 'react';
import IntroPage from './compo/introPage';
import Calci from './compo/calci';
export default function App() {
  const [Content, setContent] = useState(<IntroPage />)
  setTimeout(() => {
    setContent(<Calci />)
  }, 5000);
  return (
    <View style={styles.SafeAreaView}>
      <View style={styles.container}>{Content}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  container: {
    height: '100%',
    justifyContent: 'center'
  }
})

