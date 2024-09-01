import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SchedulesScreen = () => {
  const [level, setLevel] = useState(null);
  const [scheduleData, setScheduleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const levels = ["First Year", "Second Year", "Third Year", "Fourth Year"];

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
          navigation.navigate("Login");
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        navigation.navigate("Login");
      }
    };

    checkLoginStatus();
  }, [navigation]);

  useEffect(() => {
    if (level) {
      fetchScheduleData(level);
    }
  }, [level]);

  const fetchScheduleData = async (selectedLevel) => {
    setScheduleData(null);
    try {
      const response = await fetch(
        `http://192.168.1.2:5000/schedule/getSchedule?year=${encodeURIComponent(
          selectedLevel
        )}`
      );
      if (response.ok) {
        const data = await response.json();

        if (data.jsondata) {
          try {
            const parsedData = JSON.parse(data.jsondata);
            setScheduleData({
              ...data,
              jsondata: parsedData,
            });
          } catch (parseError) {
            console.error("Error parsing JSON data:", parseError);
          }
        } else {
          console.error("jsondata field is missing or undefined");
        }
      } else {
        console.error("Failed to fetch schedule data", await response.text());
      }
    } catch (error) {
      console.error("Error fetching schedule data:", error);
    }
  };

  const renderTable = (jsonData) => {
    const timeSlots = [" ", "8:10", "10:12", "12:2", "2:4"];

    return (
      <View style={styles.table}>
        <View style={styles.row}>
          {timeSlots.map((timeSlot, index) => (
            <View key={index} style={styles.headerCell}>
              <Text style={styles.headerText}>{timeSlot}</Text>
            </View>
          ))}
        </View>
        {jsonData.map((row, rowIndex) => (
          <View
            key={rowIndex}
            style={[
              styles.row,
              rowIndex % 2 === 0 ? styles.tableRowEven : null,
            ]}
          >
            {row.map((cell, cellIndex) => (
              <View key={cellIndex} style={styles.cell}>
                <Text style={styles.cellText}>{cell}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.aside}>
        <Text style={styles.header}>Lecture Schedules</Text>
        <ScrollView>
          {levels.map((levelName, index) => (
            <View key={index} style={styles.item}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setLevel(levelName)}
              >
                <Text style={styles.buttonText}>{levelName}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      {level && scheduleData && (
        <View style={styles.scheduleContainer}>
          <Text style={styles.levelTitle}>{level}</Text>
          {renderTable(scheduleData.jsondata)}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
  },
  aside: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  item: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
  scheduleContainer: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 1,
  },
  levelTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ddd",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  headerCell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderColor: "#ddd",
    borderWidth: 1,
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    paddingVertical: 10, 
    minHeight: 50, 
  },
  cellText: {
    textAlign: "center",
    fontSize: 9,
  },
  tableRowEven: {
    backgroundColor: "#f9f9f9",
  },
  headerText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SchedulesScreen;

