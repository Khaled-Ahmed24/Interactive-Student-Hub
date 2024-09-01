import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Footer = () => {
  return (
    <ScrollView style={styles.footer}>
      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Contact Us</Text>
        <Text style={styles.contact}>123 Main Street</Text>
        <Text style={styles.contact}>Assiut, State, ZIP</Text>
        <Text style={styles.contact}>Email: info@company.com</Text>
        <Text style={styles.contact}>Phone: (123) 456-7890</Text>
      </View>
      <View style={styles.logo}>
        <Text style={styles.logoImage}>F C I</Text>
        <Text style={styles.contact}>&copy; 2024 Company, Inc. All rights reserved.</Text>
      </View>
      <View style={styles.services}>
        <Text style={styles.servicesTitle}>Services</Text>
        <View style={styles.servicesList}>
          <Text style={styles.serviceItem}>News Page</Text>
          <Text style={styles.serviceItem}>Student Lecture Schedules</Text>
          <Text style={styles.serviceItem}>Professor Availability</Text>
          <Text style={styles.serviceItem}>Guidance for New Students</Text>
          <Text style={styles.serviceItem}>Faculty Regulations</Text>
          <Text style={styles.serviceItem}>Interactive Chat Bot</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: 20,
    color: 'white',
  },
  contact: {
    marginBottom: 20,
    color: 'white',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    fontSize: 42,
    color: 'white',
    marginBottom: 10,
  },
  services: {
    marginBottom: 20,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  servicesList: {
    // Style for the list of services
  },
  serviceItem: {
    color: 'white',
    marginBottom: 10,
  },
});
