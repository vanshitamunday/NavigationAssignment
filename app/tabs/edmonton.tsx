import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CityLink from "../../components/CityLink";
import CityInfo from "../../components/CityInfo";

export default function Edmonton() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Edmonton 🌆</Text>
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Edmonton_skyline_summer_2013.jpg" }}
        style={styles.image}
      />
      <CityLink url="https://www.edmonton.ca/" text="Go to Edmonton City Page" />
      <CityInfo text="Edmonton is famous for its river valley, the West Edmonton Mall, and being Canada's Festival City." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});
