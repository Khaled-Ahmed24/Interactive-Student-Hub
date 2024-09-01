import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Sidebar = ({ children, onLocationSelect }) => {
  const navigation = useNavigation();

  const handleLinkClick = (coordinates) => {
    if (onLocationSelect) {
      onLocationSelect(coordinates);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Text style={styles.heading}>FCI Buildings</Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() => handleLinkClick({ lat: 27.185855, lng: 31.168430 })}
        >
          <Text style={styles.linkText}>Main Building</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.link}
          onPress={() => handleLinkClick({ lat: 27.1862711, lng: 31.1683430 })}
        >
          <Text style={styles.linkText}>Laboratories Building</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.exploreLink}
          onPress={() => navigation.navigate('Places')}
        >
          <Text style={styles.exploreLinkText}>Move inside buildings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.map}>{children}</View>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  sidebar: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'flex-start',
  },
  heading: {
    marginBottom: 15,
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
  link: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
  linkText: {
    color: 'black',
  },
  exploreLink: {
    width: '50%',
    marginTop: 'auto',
    padding: 10,
    backgroundColor: 'black',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
  },
  exploreLinkText:{
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
