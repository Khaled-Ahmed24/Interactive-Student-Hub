// components/Header/Header.js
import React from "react";
import { View, StyleSheet } from "react-native";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <View style={styles.header}>
      <Navbar />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: "100%",
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
  },
});
