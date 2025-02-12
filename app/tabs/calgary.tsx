import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CityLink from "../../components/CityLink";
import CityInfo from "../../components/CityInfo";

export default function Calgary() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Calgary !!</Text>

      {/* Placeholder for image */}
      <View style={styles.imagePlaceholder}>
        <Text style={styles.placeholderText}>[Insert Image Here]</Text>
      </View>
      
      <CityInfo text="Calgary is known for its stunning Rocky Mountain views, the world-famous Calgary Stampede, and its booming energy industry." />
      <CityInfo text="Did you know? Calgary has the **sunniest days** of any major Canadian city, with over **333 sunny days per year**! ☀️" />
      <CityLink url="https://www.calgary.ca/home.html" text="Visit Calgary Official Site" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#e5c07b",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: "center",
  },
  imagePlaceholder: {
    width: "100%",
    height: 250,
    backgroundColor: "#d5dbdb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 15,
  },
  placeholderText: {
    fontSize: 16,
    color: "#666",
  },
});
