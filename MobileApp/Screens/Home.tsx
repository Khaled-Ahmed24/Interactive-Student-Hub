// Screens/Home.js
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import MainContent from "../components/Home/MainContent";
import CardContainer from "../components/Home/CardContainer";
import About from "../components/Home/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <MainContent />
      <CardContainer />
      <About />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexGrow: 1,
  },
});

export default HomeScreen;