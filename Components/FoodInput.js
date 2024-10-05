import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';


const FoodInput = ({ onAddFoo }) => {
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');

    const handleAddFood = () => {
        if (!foodName || !calories) {
            Alert.alert('Hata', 'Lütfen yiyecek adı ve kalori miktarını girin.', [{ text: 'Tamam' }]);
            return;
        }

        onAddFood({ name: foodName, calories: parseInt(calories) });
        setFoodName('');
        setCalories('');
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Yiyecek Adı"
                value={foodName}
                onChangeText={setFoodName}
            />
            <TextInput
                style={styles.input}
                placeholder="Kalori Miktarı"
                value={calories}
                keyboardType="numeric"
                onChangeText={setCalories}
            />
            <Button title="Yiyecek Ekle" onPress={handleAddFood} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        marginBottom: 16,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
        padding: 8,
    },
});

export default FoodInput;