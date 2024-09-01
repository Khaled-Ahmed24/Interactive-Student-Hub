import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
const BackButton = () => {
    const navigation = useNavigation();
  
    return (
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
    );
  };
  
  export default BackButton;
  

  const styles = StyleSheet.create({
    backButton: {
      width: 350, // Same width as your other buttons
      paddingVertical: 15,
      borderWidth: 2,
      borderColor: 'white', // Match the signUpButton's border color
      borderRadius: 8, // Same border radius for consistency
      backgroundColor: 'black', 
      justifyContent: 'center',
      marginTop: 30,
      alignSelf: 'center', // Center the button
    },
    backButtonText: {
      color: 'white', // Match the signUpButtonText color
      fontSize: 18, // Similar to the signUpButtonText font size
      fontWeight: 'bold',
      textAlign: 'left'
    },
  });