import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExerciseHistory = ({ exercises }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Egzersiz Geçmişi</Text>
      {exercises.map((item, index) => (
        <Text key={index}>
          {item.exercise} - {item.duration} dakika
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ExerciseHistory;
