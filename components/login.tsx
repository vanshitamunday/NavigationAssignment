import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import supabase from '../lib/supabase';
import { router } from "expo-router";

interface SignInProps {
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  onSignInSuccess: (name: string) => void;
}

export default function Sign_In({ setIsSignedIn, onSignInSuccess }: SignInProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkUserSession();
  }, []);

  const checkUserSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      router.push('/welcome');
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Please enter both email and password');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      Alert.alert('Login Failed', error.message);
      return;
    }

    if (data.user) {
      const { data: userData, error: userError } = await supabase
        .from("user_details")
        .select("first_name")
        .eq("uuid", data.user.id)
        .single();

      if (userError || !userData) {
        Alert.alert("Error", "Could not fetch user details.");
        return;
      }

      setIsSignedIn(true);
      onSignInSuccess(userData.first_name);

      router.push('/welcome'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Button
        title="Log In"
        onPress={handleLogin}
      />
      <Text style={styles.linkText} onPress={() => router.push('/signup')}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: '100%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  linkText: {
    color: 'blue',
    marginTop: 15,
  }
});
