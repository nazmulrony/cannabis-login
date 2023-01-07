import { StyleSheet, View } from 'react-native';
import CheckAvailability from './screens/CheckAvailability';
import Login from './screens/Login';

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* <Login /> */}
      <CheckAvailability />

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }

});
