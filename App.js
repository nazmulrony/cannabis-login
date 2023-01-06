import { StyleSheet, View } from 'react-native';
import Login from './screens/Login';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Login />

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }

});
