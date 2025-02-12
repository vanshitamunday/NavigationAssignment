import React, { useState } from "react";
import { View } from "react-native";
import SignIn from "../components/login";
import Welcome from "../components/welcome"; // Import the welcome screen

export default function Index() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Track login state

  return (
    <View style={{ flex: 1 }}>
      {isSignedIn ? <Welcome /> : <SignIn setIsSignedIn={setIsSignedIn} />}
    </View>
  );
}
