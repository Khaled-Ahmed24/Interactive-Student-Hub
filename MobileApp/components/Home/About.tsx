import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const About = () => {
  return (
    <View style={styles.container} id="about">
      <View style={styles.textContainer}>
        <Text style={styles.header}>About Us</Text>
        <Text style={styles.description}>
          Welcome to the FCI website, where you can easily access lecture
          schedules, college events, achievements, announcements, professor
          availability for consultations, valuable resources and guidance for your
          academic journey, and a 24/7 chatbot to assist you with any questions or
          concerns.
        </Text>
      </View>
      <View style={styles.imageCard}>
        <Image
          source={require('../../assets/images/about.jpg')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#fefefe',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 70,
    marginHorizontal: 40,
  },
  textContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
  imageCard: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: 300,  // Adjust the width and height as needed
    height: 220,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
