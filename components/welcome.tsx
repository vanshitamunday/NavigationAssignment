import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; 

export default function Welcome() {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our New App! </Text>
      <Text style={styles.subtitle}>Select a city to explore:</Text>

      {/* Calgary Section */}
      <View style={styles.cityContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>[Calgary Image Here]</Text>
        </View>
        <TouchableOpacity 
          style={[styles.button, styles.calgaryButton]} 
          onPress={() => router.push("/tabs/calgary")}
        >
          <Text style={styles.buttonText}>Go to Calgary</Text>
        </TouchableOpacity>
      </View>

      {/* Edmonton Section */}
      <View style={styles.cityContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>[Edmonton Image Here]</Text>
        </View>
        <TouchableOpacity 
          style={[styles.button, styles.edmontonButton]} 
          onPress={() => router.push("/tabs/edmonton")}
        >
          <Text style={styles.buttonText}>Go to Edmonton</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  cityContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 300,
    height: 180,
    backgroundColor: "#D5DBDB", 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 10,
  },
  placeholderText: {
    fontSize: 16,
    color: "#7F8C8D",
  },
  button: {
    width: "85%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  calgaryButton: {
    backgroundColor: "#D84315",
  },
  edmontonButton: {
    backgroundColor: "#42A5F5",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
