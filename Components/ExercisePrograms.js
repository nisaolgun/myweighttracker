import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import exercises from '../data/exercises';

const ExercisePrograms = () => {
    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.exercisesTitle}>Egzersizler:</Text>
        {item.exercises.map((exercise, index) => (
          <Text key={index} style={styles.exercise}>{`- ${exercise}`}</Text>
        ))}
      </View>
    );
  
    return (
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.container}
      />
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    card: {
      padding: 10,
      marginVertical: 8,
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
      elevation: 2,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      marginVertical: 4,
    },
    exercisesTitle: {
      fontWeight: 'bold',
      marginTop: 8,
    },
    exercise: {
      fontSize: 14,
    },
  });
  
  export default ExercisePrograms;