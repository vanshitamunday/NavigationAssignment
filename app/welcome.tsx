import React, { useEffect, useState } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import supabase from "../lib/supabase";

interface WelcomeProps {
  userName: string | null;
}

const Welcome: React.FC<WelcomeProps> = ({ userName }) => {
  const router = useRouter();
  const [user, setUser] = useState<string | null>(userName);

  useEffect(() => {
    if (!user) {
      fetchUserDetails();
    }
  }, [user]);

  const fetchUserDetails = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.replace("/");
      return;
    }

    const { data, error } = await supabase
      .from("user_details")
      .select("first_name")
      .eq("uuid", session.user.id)
      .single();

    if (error || !data) {
      Alert.alert("Error", "Could not fetch user details.");
      setUser("Guest");
    } else {
      setUser(data.first_name);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Logout Failed", error.message);
      return;
    }
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user || "Guest"}!</Text>

      <Text style={styles.subtitle}>Select a city to explore:</Text>

      {/* Calgary Section */}
      <View style={styles.cityContainer}>
        <View style={styles.imagePlaceholder}>
          <Image 
            source={require("../assets/calgary.jpg")}
            style={styles.cityImage}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity 
          style={[styles.button, styles.calgaryButton]} 
          onPress={() => router.push("/tabs/calgary")}
        >
          <Text style={styles.buttonText}>Go to Calgary</Text>
        </TouchableOpacity>
      </View>

      {/* Edmonton Section */}
      <View style={styles.cityContainer}>
        <View style={styles.imagePlaceholder}>
          <Image 
            source={require("../assets/edmonton.jpg")}
            style={styles.cityImage}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity 
          style={[styles.button, styles.edmontonButton]} 
          onPress={() => router.push("/tabs/edmonton")}
        >
          <Text style={styles.buttonText}>Go to Edmonton</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  cityContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 300,
    height: 180,
    backgroundColor: "#D5DBDB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 10,
    overflow: "hidden",
  },
  cityImage: {
    width: "100%",
    height: "100%",
  },
  button: {
    width: "85%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  calgaryButton: {
    backgroundColor: "#D84315",
  },
  edmontonButton: {
    backgroundColor: "#42A5F5",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#FF5252",
    padding: 15,
    borderRadius: 10,
    width: "85%",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
