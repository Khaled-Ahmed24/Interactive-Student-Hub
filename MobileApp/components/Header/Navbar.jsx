import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; 

const Navbar = () => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch("http://192.168.1.2:5000/login/check-login", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setLoggedIn(data.loggedIn);
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };
  
    checkLoginStatus();
  }, [loggedIn]); 

  useEffect(() => {
    const fetchNotifications = async () => {
      if (loggedIn) {
        try {
          const response = await fetch(
            "http://192.168.1.2:5000/notifications/getAllNotifications",
            {
              method: "GET",
              credentials: "include",
            }
          );
          const data = await response.json();
          setNotifications(data);
        } catch (error) {
          console.error("Error fetching notifications:", error);
        }
      }
    };

    fetchNotifications();
  }, [loggedIn]);

  const handleLogout = async () => {
    try {
      await fetch("http://192.168.1.2:5000/login/logout", {
        method: "POST",
        credentials: "include",
      });
      setLoggedIn(false); 
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications(false);
    navigation.navigate("News");
  };

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburger}>
        <Text style={styles.hamburgerText}>{menuOpen ? "✖" : "☰"}</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>FCI</Text>
      </View>

      {loggedIn && (
        <View style={styles.authContainer}>
          <TouchableOpacity
            onPress={toggleNotifications}
            style={styles.notificationButton}
          >
            <Ionicons name="notifications-outline" size={24} color="#333" />
            {showNotifications && (
              <View style={styles.notificationDropdown}>
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={handleNotificationClick}
                      style={styles.notificationItem}
                    >
                      <Text>{notification.title}</Text>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text style={styles.noNotifications}>No Notifications</Text>
                )}
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
      {!loggedIn && (
        <View style={styles.authLinks}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.buttonLogin}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.buttonSignUp}
          >
            <Text style={styles.signUpText}>Free Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}

      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
              toggleMenu();
            }}
            style={styles.menuItem}
          >
            <Text style={styles.linkText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("about");
              toggleMenu();
            }}
            style={styles.menuItem}
          >
            <Text style={styles.linkText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("contact");
              toggleMenu();
            }}
            style={styles.menuItem}
          >
            <Text style={styles.linkText}>Contact</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
  },
  hamburger: {
    padding: 10,
  },
  hamburgerText: {
    fontSize: 28,
    color: "#333",
  },
  authContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationButton: {
    marginHorizontal: 10,
  },
  notificationDropdown: {
    position: "absolute",
    top: 40,
    right: 0,
    backgroundColor: "#fff",
    width: 200,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 1000,
  },
  notificationItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  noNotifications: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
    color: "#333",
  },
  logoutButton: {
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#000",
    borderRadius: 5,
  },
  logoutText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  authLinks: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonLogin: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  buttonSignUp: {
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#000",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
  },
  signUpText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  menu: {
    position: "absolute",
    top: 60,
    left: 10,
    backgroundColor: "#fff",
    width: 150,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 1000,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  linkText: {
    fontSize: 16,
    color: "#333",
  },
});

export default Navbar;
