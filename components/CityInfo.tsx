import React from "react";
import { View, Text, StyleSheet } from "react-native";

type CityInfoProps = { text: string };

export default function CityInfo({ text }: CityInfoProps) {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoBox: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
  },
});
