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
    width: "100%",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#F5EFE6",
    borderRadius: 8,
    borderLeftColor: "#3498DB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
  },
});
