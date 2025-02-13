import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CityLink from "../../components/CityLink";
import CityInfo from "../../components/CityInfo";

export default function Edmonton() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Edmonton !!</Text>
      
      {/* Placeholder for image */}
      <View style={styles.imagePlaceholder}>
        <Image
        source={require("../../assets/edmonton.jpg")}
        />
      </View>

      <CityInfo text="Edmonton is the capital of Alberta, known for its beautiful river valley and vibrant cultural scene." />
      <CityInfo text="Did you know? Edmonton is home to **North America's largest mall**, the **West Edmonton Mall**, featuring over 800 stores! 🛍️" />
      <CityLink url="https://www.edmonton.ca/" text="Visit Edmonton Official Site" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#A3D2CA",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: "100%",
    height: 250,
    backgroundColor: "#d5dbdb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  cityImage: {
    width: 300, 
    height: 180, 
    borderRadius: 12,
    marginBottom: 15,
    resizeMode: "cover",
  },
});
