import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link} from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>

       <Text style={{fontSize:30}}>Welcome Ventures to your Attendance App</Text>
       <Link href="/profile">Go to Profile</Link>
       <Link href="/register">Register</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
