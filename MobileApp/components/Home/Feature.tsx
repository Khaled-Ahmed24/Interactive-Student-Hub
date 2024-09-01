import React,{useState} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface FeatureProps {
  image: any;
  title: string;
  text: string;
  link: string;
}

const Feature: React.FC<FeatureProps> = ({ image, title, text, link }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image
        source={typeof image === 'string' ? { uri: image } : image}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>{text}</Text>
        {link && (
          <TouchableOpacity
            onPress={() => {navigation.navigate(link)}}
            style={styles.cardButton}
          >
            <Text style={styles.cardButtonText}>Details</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Feature;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 20,
    marginHorizontal: 20,
    paddingBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 300,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  cardButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});
