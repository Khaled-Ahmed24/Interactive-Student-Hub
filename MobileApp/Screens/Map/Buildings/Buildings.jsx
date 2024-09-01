import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, Dimensions, Text, Linking, I18nManager } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Sidebar from "./Sidebar";
import Map from "./Map";
import Spinner from "../../../components/Spinner/Spinner";
import { TouchableOpacity } from "react-native-gesture-handler";

const BuildingScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.2:5000/login/check-login",
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await response.json();
        if (data.loggedIn) {
          setIsLoggedIn(true);
        } else {
          navigation.navigate("LoginScreen");
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        navigation.navigate("LoginScreen");
      }
    };

    checkLoginStatus();
  }, [navigation]);

  const handleGoToGoogleMaps = (coords) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`;
    Linking.openURL(googleMapsUrl).catch(err => console.error("Failed to open URL:", err));
  };

  const handleLocationSelect = (coords) => {
    setCoordinates(coords);
    handleGoToGoogleMaps(coords);
  };

  if (!isLoggedIn) {
    return <Spinner />;
  }

  return (
    <Sidebar onLocationSelect={handleLocationSelect}>
      <Map coordinates={coordinates} />
      <TouchableOpacity 
        onPress={() => handleGoToGoogleMaps(coordinates)} 
        style={styles.mapButton}
      >
        <Text style={styles.mapButton}>View in Google Maps</Text>
        </TouchableOpacity>
    </Sidebar>
  );
};

export default BuildingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: '30%',
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'flex-start',
  },
  heading: {
    marginBottom: 15,
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    width: '100%',
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
    width: '100%',
    marginTop: 'auto',
    padding: 10,
    backgroundColor: 'black',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
  },
  map: {
    width: '70%',
    padding: 10,
  },
});


