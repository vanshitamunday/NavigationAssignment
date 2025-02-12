import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Redirect } from "expo-router";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My New App 🎉</Text>
      <Redirect href="/tabs/calgary" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});
