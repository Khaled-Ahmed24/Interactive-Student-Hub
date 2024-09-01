import { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

interface CardData {
  title: string;
  description: string;
  image: any;
  link: string;
}

function Card({ title, description, image, link }: CardData) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text
          style={styles.cardText}
          numberOfLines={isExpanded ? undefined : 1} // Show full text if expanded, otherwise limit to 3 lines
        >
          {description}
        </Text>
        <TouchableOpacity onPress={handleShowMoreClick} style={styles.cardButton}>
          <Text style={styles.cardButtonText}>
            {isExpanded ? "Show less" : "Show more"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Card;

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
