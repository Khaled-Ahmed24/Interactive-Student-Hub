import { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import ContentsList from "./ContentList";
import Spinner from "../../components/Spinner/Spinner";
import BackButton from "../../components/BackButton/BackButton";
import { useNavigation } from "@react-navigation/native";

const RegulationScreen = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigation();

  const handleItemClick = (item: string) => {
    navigation.navigate('RegulationImages', { image: item });
  };

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

        if (!data.loggedIn) {
          window.location.href = "/login";
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <ScrollView style={{ display: "flex", direction: "rtl" }}>
      <BackButton />
      <ContentsList onItemClick={handleItemClick} />
    </ScrollView>
  );
};

export default RegulationScreen;
