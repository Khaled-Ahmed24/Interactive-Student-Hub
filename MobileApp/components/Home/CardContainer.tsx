import React from "react";
import { ScrollView,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feature from "./Feature";
const featureData = [
  {
    image: require("../../assets/images/news.jpg"),
    title: "News",
    text: "Stay updated with the latest news and events happening in the college.",
    link: "News",
  },
  {
    image: require("../../assets/images/Schedules.jpg"),
    title: "Student Lecture Schedules",
    text: "Access and download the latest lecture schedules for all courses. Stay on top of your academic schedule with our up-to-date timetables and ensure you never miss a class or important academic event. Click to view the schedules.",
    link: "Schedules",
  },
  {
    image: require("../../assets/images/Professor.jpeg"),
    title: "Professor Availability",
    text: "Find out when professors are available for consultation and office hours. Whether you need academic advice or have questions about coursework, check the availability of your professors and plan your visits accordingly.",
    link: "Availability",
  },
  {
    image: require("../../assets/images/guidance.jpg"),
    title: "Guidance for New Students",
    text: "Helpful resources and guidance for new students to navigate the college. From orientation information to tips on making the most of your college experience, we've got you covered. Click to access the guidance resources.",
    link: "Map",
  },
  {
    image: require("../../assets/images/Regulations.jpg"),
    title: "Faculty Regulations",
    text: "Read the regulations and policies of the faculty to stay informed. Knowing the rules and guidelines is essential for maintaining academic integrity and understanding your responsibilities as a student. Click to read the regulations.",
    link: "Regulation",
  },
  {
    image: require("../../assets/images/chatbot.jpg"),
    title: "Interactive Chat Bot",
    text: "Interact with our AI-powered chat bot for quick answers to your questions. Whether you need information about courses, schedules, or general inquiries, our chat bot is here to help 24/7. Click to start a conversation.",
    link: "Chatbot",
  },
];

const FeatureContainer = () => {
  return (
    <ScrollView style={styles.cardContainer}>
      {featureData.map((feature, index) => (
        <Feature
        key={index}
        image={feature.image}
        title={feature.title}
        text={feature.text}
        link={feature.link}
      />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    padding: 20,
  },
  card: {
    width: "90%",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 20,
    marginHorizontal: 20,
    paddingBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: 300,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  cardButton: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
  },
  cardButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default FeatureContainer;
