import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Dimensions, ImageBackground } from 'react-native';

const { height } = Dimensions.get('window');

function MainContent() {
  const handlePress = () => {
    Linking.openURL('#');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/college.png')}
      style={[styles.backgroundImage, { height: height }]}
    >
      <View style={styles.heroOverlay}>
        <View style={styles.heroContent}>
          <Text style={styles.heroContentText}>Streamline Your College Life</Text>
          <Text style={styles.heroContentP}>
            Manage schedules, connect with student services, and access key resources all in one place. Simplify your academic journey with our portal.
          </Text>
          <TouchableOpacity onPress={handlePress} style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Explore Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default MainContent;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  heroContent: {
    maxWidth: 600,
    alignItems: 'center',
  },
  heroContentText: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroContentP: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 30,
    color: '#fff',
    textAlign: 'center',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  ctaButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
  },
});
