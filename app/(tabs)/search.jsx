import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'

const Library = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="#fff" />

      {/* Scrollable List of Options */}
      <ScrollView contentContainerStyle={styles.optionsContainer}>
        <Text style={styles.heading}>What do you want to listen?</Text>

        {/* Artists */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#A1E3A1' }]}>
          <Text style={styles.buttonText}>Artists</Text>
        </TouchableOpacity>

        {/* The Japanese Podcast */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#FF6B6B' }]}>
          <Text style={styles.buttonText}>The Japanese Podcast</Text>
        </TouchableOpacity>

        {/* Taylor Swift */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#9AD0EC' }]}>
          <Text style={styles.buttonText}>Taylor Swift</Text>
        </TouchableOpacity>

        {/* Pinoy Mix */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#FFE156' }]}>
          <Text style={styles.buttonText}>Pinoy mix</Text>
        </TouchableOpacity>

        {/* Olivia Rodrigo */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#FFC0CB' }]}>
          <Text style={styles.buttonText}>Olivia Rodrigo</Text>
        </TouchableOpacity>

        {/* Sleeping Pill */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#3B3B98' }]}>
          <Text style={styles.buttonText}>Sleeping Pill</Text>
        </TouchableOpacity>
      </ScrollView>

      
    </View>
  )
}

export default Library

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#544b3a',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  optionsContainer: {
    flexGrow: 1,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  footerIcon: {
    fontSize: 24,
  },
})