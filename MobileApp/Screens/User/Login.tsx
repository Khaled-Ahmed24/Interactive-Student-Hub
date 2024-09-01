import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "./LoginForm";

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.fci}>F C I</Text>
          <LoginForm isAdmin={isAdmin} />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  container: {
    width: width * 0.9,
    maxWidth: 700,
    marginVertical: 20,
  },
  box: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  fci: {
    marginVertical: 20,
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  text: {
    marginVertical: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  p: {
    marginVertical: 15,
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
