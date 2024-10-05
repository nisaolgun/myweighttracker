import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = async () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    await AsyncStorage.setItem('theme', JSON.stringify(newTheme));
  };

  const loadTheme = async () => {
    const storedTheme = await AsyncStorage.getItem('theme');
    if (storedTheme !== null) {
      setIsDarkMode(JSON.parse(storedTheme));
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>
        {isDarkMode ? "Karanlık Mod" : "Aydınlık Mod"}
      </Text>
      <Button title="Temayı Değiştir" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  light: {
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: '#333',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});
