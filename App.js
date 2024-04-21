import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Clock from './src/Clock';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Clock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
