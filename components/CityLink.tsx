import React from "react";
import { Text, TouchableOpacity, Linking, StyleSheet } from "react-native";

type CityLinkProps = { url: string; text: string };

export default function CityLink({ url, text }: CityLinkProps) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "blue",
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
