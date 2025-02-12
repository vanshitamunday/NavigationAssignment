import React, { useState } from "react";
import { View } from "react-native";
import SignIn from "../components/login";
import Welcome from "../components/welcome";

export default function Index() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {isSignedIn ? <Welcome /> : <SignIn setIsSignedIn={setIsSignedIn} />}
    </View>
  );
}
