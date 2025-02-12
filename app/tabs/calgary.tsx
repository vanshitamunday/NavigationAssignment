import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CityLink from "../../components/CityLink";
import CityInfo from "../../components/CityInfo";

export default function Calgary() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Calgary 🏔️</Text>
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Calgary_Skyline_2021.jpg/1280px-Calgary_Skyline_2021.jpg" }}
        style={styles.image}
      />
      <CityLink url="https://www.calgary.ca/home.html" text="Go to Calgary City Page" />
      <CityInfo text="Calgary is known for its beautiful Rocky Mountains, the Calgary Stampede, and its vibrant energy sector." />
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
