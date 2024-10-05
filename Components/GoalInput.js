import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ onSetGoal }) => {
    const [goal, setGoal] = useState('');

    const handleSetGoal = () => {
        if (goal) {
            onSetGoal(parseFloat(goal));
            setGoal('');

        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="hedef kiloyu girin"
                value={goal}
                onChangeText={setGoal}
                keyboardType='numeric'
            />
            <Button title="Hedef Belirle" onPress={handleSetGoal} />
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10,
    },
});
export default GoalInput;