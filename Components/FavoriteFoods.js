import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const FavoriteFoods = () => {

    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [recipe, setRecipe] = useState('');
    const [FavoriteFoods, setFavoriteFoods] = useState([]);

    const addFavoriteFood = () => {
        const newFood = { name: foodName, calories: calories, recipe: recipe };
        setFavoriteFoods((prevFoods) => [...prevFoods, newFood]);
        setFoodName('');
        setCalories('');
        setRecipe('');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favori Yiyecekler ve Tarifler</Text>
            <TextInput
                placeholder="Yiyecek Adı"
                value={foodName}
                onChangeText={setFoodName}
                style={styles.input}
            />
            <TextInput
                placeholder="Kalori Miktarı"
                value={calories}
                onChangeText={setCalories}
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput
                placeholder="Tarif"
                value={recipe}
                onChangeText={setRecipe}
                style={styles.input}
            />
            <Button title="Ekle" onPress={addFavoriteFood} />
            <FlatList
                data={favoriteFoods}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.foodItem}>
                        <Text style={styles.foodName}>{item.name}</Text>
                        <Text>Kalori: {item.calories} kcal</Text>
                        <Text>Tarif: {item.recipe}</Text>
                    </View>
                )}
            />
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
    foodItem: {
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    foodName: {
        fontWeight: 'bold',
    },
});

export default FavoriteFoods;