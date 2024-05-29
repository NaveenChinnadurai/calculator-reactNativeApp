import { StyleSheet, SafeAreaView } from 'react-native';
import Calci from './compo/calci';

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Calci />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    height: '100%',
    justifyContent: 'center'
  }
})

