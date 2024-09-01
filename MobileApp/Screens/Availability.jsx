import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";

const professors = {
  CS: ["Dr. Ahmed Hosny", "Dr. Khaled Fathy"],
  IS: ["Dr. Ibrahim Al-Awadhi", "Dr. Suha"],
  IT: ["Dr. Nagwa"],
};

const Availability = () => {
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [availabilityData, setAvailabilityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showList, setShowList] = useState(true);
  const departments = Object.keys(professors);

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
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    if (selectedProfessor) {
      fetchAvailabilityData(selectedProfessor);
    }
  }, [selectedProfessor]);

  const fetchAvailabilityData = async (professor) => {
    setAvailabilityData(null);
    try {
      const response = await fetch(
        `http://192.168.1.2:5000/professorAvailability/getAvailability?professor=${encodeURIComponent(
          professor
        )}`
      );

      if (response.ok) {
        const data = await response.json();

        if (data.jsondata) {
          console.log("Raw JSON data:", data.jsondata);
          setAvailabilityData({
            ...data,
            jsondata: data.jsondata,
          });
        } else {
          console.error("jsondata field is missing or undefined");
        }
      } else {
        console.error(
          "Failed to fetch availability data",
          await response.text()
        );
      }
    } catch (error) {
      console.error("Error fetching availability data:", error);
    }
  };

  const renderTable = (jsonData) => {
    return (
      <ScrollView horizontal style={styles.tableWrapper}>
        <View style={styles.table}>
          {jsonData.map((row, rowIndex) => (
            <View
              key={rowIndex}
              style={[
                styles.tr,
                rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow,
              ]}
            >
              {row.map((cell, cellIndex) => (
                <Text
                  key={cellIndex}
                  style={[styles.td, cellIndex === 0 ? styles.firstColumn : {}]}
                >
                  {cell}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      {showList ? (
        <View style={styles.aside}>
          <Text style={styles.header}>Select Professor</Text>
          {departments.map((department) => (
            <View key={department}>
              <Text style={styles.departmentHeader}>{department}</Text>
              {professors[department].map((professor) => (
                <TouchableOpacity
                  key={professor}
                  onPress={() => {
                    setSelectedProfessor(professor);
                    setShowList(false);
                  }}
                  style={styles.item}
                >
                  <Text style={styles.button}>{professor}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      ) : (
        <>
          {selectedProfessor && availabilityData && (
            <View style={styles.availabilityContainer}>
              <Text style={styles.title}>
                Availability for {selectedProfessor}
              </Text>
              {renderTable(availabilityData.jsondata)}
              <TouchableOpacity
                onPress={() => setShowList(true)}
                style={styles.showListButton}
              >
                <Text style={styles.showListButtonText}>
                  Show Professor List
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
  aside: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
  },
  header: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  departmentHeader: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  item: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  button: {
    padding: 10,
    color: "#000",
    fontSize: 16,
  },
  showListButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  showListButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  availabilityContainer: {
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  tableWrapper: {
    maxHeight: 400,
    width: "100%",
  },
  table: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
  },
  tr: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  td: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    textAlign: "center",
    fontSize: 16,
    flex: 1,
  },
  firstColumn: {
    flex: 0,
    width: 100,
  },
  evenRow: {
    backgroundColor: "#f5f5f5",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
});

export default Availability;
