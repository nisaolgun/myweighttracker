import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DailyCalorieTracker = () => {
  const [calorieGoal, setCalorieGoal] = useState('');
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);

  const addCalories = (calories) => {
    setCaloriesConsumed((prev) => prev + parseInt(calories, 10));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Günlük Kalori Takibi</Text>
      <TextInput
        placeholder="Günlük Kalori Hedefi"
        value={calorieGoal}
        onChangeText={setCalorieGoal}
        keyboardType="numeric"
        style={styles.input}
      />
      <Text>Toplam Tüketilen Kalori: {caloriesConsumed} kcal</Text>
      <TextInput
        placeholder="Tüketilen Kalori"
        keyboardType="numeric"
        onSubmitEditing={(e) => addCalories(e.nativeEvent.text)}
        style={styles.input}
      />
      <Text>
        Hedefe Kalan: {calorieGoal ? calorieGoal - caloriesConsumed : 'Hedefi Belirleyin'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default DailyCalorieTracker;
