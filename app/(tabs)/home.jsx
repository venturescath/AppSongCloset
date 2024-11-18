import React from 'react'; 
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning Cathy,</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.pinkButton}>
                <Text style={styles.buttonText}>Music</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pinkButton}>
                <Text style={styles.buttonText}>Podcasts & Shows</Text>
              </TouchableOpacity> 
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Listen new soundtracks</Text>
          <View style={styles.itemsRow}>
            <View style={styles.item}>
              <Image source={require('../../assets/image/olivia.png')} style={styles.image} />
              <Text style={styles.itemTitle}>Happier</Text>
              <Text style={styles.itemSubtitle}>Olivia Rodrigo</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/image/taylorr.png')} style={styles.image} />
              <Text style={styles.itemTitle}>Style</Text>
              <Text style={styles.itemSubtitle}>Taylor Swift</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New podcast episodes</Text>
          <View style={styles.itemsRow}>
            <View style={styles.item}>
              <Image source={require('../../assets/image/air.png')} style={styles.image} />
              <Text style={styles.itemTitle}>Airplane Story</Text>
              <Text style={styles.itemSubtitle}>Just the Plane Podcast</Text>
            </View>
            <View style={styles.item}>
              <Image source={require('../../assets/image/th.png')} style={styles.image} />
              <Text style={styles.itemTitle}>Ancient Love Story</Text>
              <Text style={styles.itemSubtitle}>The Japanese Podcast</Text> 
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Mix</Text>
          {/* Add daily mix content here */}
        </View>
      </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Pastel green background color
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#544b3a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinkButton: {
    backgroundColor: '#FFB6C1', // Pastel pink background color
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginRight: 8,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  itemsRow: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    alignItems: 'center',
  },
  image: {
    width: 144,
    height: 144,
    borderRadius: 8,
  },
  itemTitle: {
    marginTop: 8,
    color: '#ffffff',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#d3d3d3',
  },
});

export default Home;
