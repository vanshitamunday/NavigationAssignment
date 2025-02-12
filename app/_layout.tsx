import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Sign In" }} />
      <Stack.Screen name="welcome" options={{ title: "Welcome" }} />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />

    </Stack>
  );
}
