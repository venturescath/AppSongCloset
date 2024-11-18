import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ActivityIndicator } from 'react-native-web'

const CustomButton = ({title,handlePress, contentContainerStyle,textStyles, isLoading}) => {
  return (
    <TouchableOpacity
    style={styles.loginButton}
    onPress={handlePress}
    activeOpacity={0.7}
    className={` ${contentContainerStyle}${isLoading}'opcity-50':''}`}
    >
        <Text 
        style={styles.loginButtonText}
        className={` ${textStyles}`}>
            {title}
        </Text>
        { isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color='#fff'
            size='small'
          />
        )}
    </TouchableOpacity>
  )
}

export default CustomButton

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
