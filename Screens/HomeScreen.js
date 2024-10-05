import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import WeightInput from '../Components/WeightInput';
import WeightChart from '../Components/WeightChart';
import GoalInput from '../Components/GoalInput';
import Recommendations from '../Components/Recommendations';
import WeightHistory from '../Components/WeightHistory';
import FoodInput from '../Components/FoodInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExercisePrograms from '../Components/ExercisePrograms';
import DailyCalorieTracker from '../Components/DailyCalorieTracker';
import UserProfile from '../Components/UserProfile';
import FavoriteFoods from '../Components/FavoriteFoods';
import ExerciseInput from '../Components/ExerciseInput'; 
import ExerciseHistory from '../Components/ExerciseHistory'; 

const HomeScreen = () => {
  const [weights, setWeights] = useState([]);
  const [goal, setGoal] = useState(null);
  const [foodEntries, setFoodEntries] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    loadWeights();
    requestNotificationPermission();
  }, []);

  const requestNotificationPermission = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      await Notifications.requestPermissionsAsync();
    }
  };

  const loadWeights = async () => {
    try {
      const storedWeights = await AsyncStorage.getItem('weights');
      if (storedWeights) {
        setWeights(JSON.parse(storedWeights));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveWeights = async (newWeights) => {
    try {
      await AsyncStorage.setItem('weights', JSON.stringify(newWeights));
    } catch (error) {
      console.error(error);
    }
  };

  const addWeight = async (weight) => {
    const newWeights = [...weights, parseFloat(weight)];
    setWeights(newWeights);
    saveWeights(newWeights);

    if (goal && parseFloat(weight) > goal) {
      Alert.alert("Uyarı", "Hedef kilonuzun üzerindesiniz!", [{ text: "Tamam" }]);
      scheduleNotification();
    }
  };

  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hedef Kilonuza Ulaştınız!",
        body: "Hedef kilonuzun üzerindesiniz. İlerlemeye devam edin!",
      },
      trigger: {
        seconds: 2,
      },
    });
  };

  const addFoodHandler = (food) => {
    setFoodEntries((prevEntries) => [...prevEntries, food]);
  };

  const addExerciseHandler = (exercise) => {
    setExercises((prevExercises) => [...prevExercises, exercise]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kilo Takip Uygulaması</Text>
      <UserProfile />
      <GoalInput onSetGoal={setGoal} />
      {goal && <Text style={styles.goalText}>Hedef Kilo: {goal} kg</Text>}
      <WeightInput onSubmit={addWeight} />
      <FoodInput onAddFood={addFoodHandler} />
      <ExerciseInput onAddExercise={addExerciseHandler} />
      <ExerciseHistory exercises={exercises} /> 
      <FavoriteFoods />
      <DailyCalorieTracker />
      <WeightChart data={weights} />
      {weights.length > 0 && (
        <Text style={styles.currentWeightText}>
          Mevcut Kilo: {weights[weights.length - 1]} kg
        </Text>
      )}
      <Recommendations />
      <WeightHistory weights={weights} />
      <ExercisePrograms />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    margin: 20,
  },
  goalText: {
    fontSize: 18,
    color: 'blue',
  },
  currentWeightText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default HomeScreen;
