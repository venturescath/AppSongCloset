import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email or username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#FFF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <Text style={styles.title}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#FFF"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handleTogglePassword} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>{showPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Confirm Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#FFF"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={handleToggleConfirmPassword} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>{showConfirmPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3C3C2B',
    padding: 20,
  },
  title: {
    color: '#FFF',
    alignSelf: 'flex-start',
    marginLeft: 40,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '80%',
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#8C7F62',
    color: '#FFF',
  },
  passwordContainer: {
    width: '80%',
    position: 'relative',
    marginBottom: 10,
  },
  toggleButton: {
    position: 'absolute',
    right: 15,
    top: '35%',
  },
  toggleButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: '#FFF',
    padding: 12,
    marginTop: 20,
    borderRadius: 8,
    width: '60%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#3C3C2B',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
