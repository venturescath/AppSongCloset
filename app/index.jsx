import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { styled } from 'nativewind';

// Create a styled version of ImageBackground
const StyledImageBackground = styled(ImageBackground);

export default function App() {
  return (
    <StyledImageBackground
      source={require('../assets/image/green.png')} // Make sure this path is correct
      style={styles.background} // Apply styling to ensure the background covers the entire screen
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Header text */}
        <Text style={styles.header}>SongCloset</Text>

        {/* Heading text */}
        <Text style={styles.heading}>Millions of Songs. Free on SongCloset.</Text>

        {/* Subheading text */}
        <Text style={styles.subheading}>Listen to your favorite tracks anytime, anywhere.</Text>

        {/* Log In Link */}
        <Link href="/register" style={[styles.button, styles.buttonPink]}>
          <Text style={styles.buttonText}>Register</Text>
        </Link>

        <Link href="/home" style={styles.homeLink}>GO TO HOME</Link>

        <StatusBar style="auto" />
      </View>
    </StyledImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#FFFFFF', // White color for the header text
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20, // Add horizontal padding for better responsiveness
  },
  heading: {
    color: '#FFFFFF', // White color for heading
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    paddingHorizontal: 20, // Add horizontal padding for better responsiveness
  },
  subheading: {
    color: '#FFFFFF', // White color for subheading
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20, // Add horizontal padding for better responsiveness
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonPink: {
    backgroundColor: '#FFB6C1', // Pastel pink
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  homeLink: {
    color: '#FFB6C1', // Pastel pink for home link
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
