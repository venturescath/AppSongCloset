import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link,router } from 'expo-router'

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

  const [form, setForm]=useState({
    email: '',
    password:'',
    confirmPassword:'',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{
    
  }

  return (
    <View style={styles.container}>
      
      <View className='p-2 w-full'>
                <FormField
                  title="Email:"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  keyboardType="email-address"
                />
              </View>
      
      
      <View className='p-2 w-full'>
              <View >
                <FormField
                  title="Password:"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  keyboardType="Password:"
                  secureTextEntry={!showConfirmPassword}
                />
              </View>
        <TouchableOpacity onPress={handleTogglePassword} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>{showPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      
      <View className='p-2 w-full'>
      <View >
                <FormField
                  title="Confirm Password:"
                  value={form.confirmPassword}
                  handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
                  keyboardType="Password:"
                  secureTextEntry={!showConfirmPassword}
                />
              </View>
        <TouchableOpacity onPress={handleToggleConfirmPassword} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>{showConfirmPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

            <CustomButton
                  title="REGISTER"
                  handlePress={()=>router.push('/home')}
                  containerStyles="w-full mt-7"
                  isLoading={isSubmitting}
              />

      
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
