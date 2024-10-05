import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const WeightHistory = ({ weights }) => {
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}>Kilo Geçmişi</Text>

            <FlatList
                data={weights}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item} kg</Text>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default WeightHistory;
