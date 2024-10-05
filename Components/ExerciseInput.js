import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ExerciseInput = ({ onAddExercise }) => {
    const [exercise, setExercise] = useState('');
    const [duration, setDuration] = useState('');

    const handleAddExercise = () => {
        if (exercise && duration) {
            onAddExercise({ exercise, duration: parseFloat(duration) });
            setExercise('');
            setDuration('');
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Egzersiz Adı"
                value={exercise}
                onChangeText={setExercise}
            />
            <TextInput
                style={styles.input}
                placeholder="Süre (dakika)"
                keyboardType="numeric"
                value={duration}
                onChangeText={setDuration}
            />
            <Button title="Egzersizi Ekle" onPress={handleAddExercise} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    input: {
        borderBottomWidth: 1,
        marginVertical: 5,
        padding: 10,
    },
});
export default ExerciseInput;