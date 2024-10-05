import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const UserProfile = () => {
    const [name, setname] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const saveProfile = () => {
        console.log({ name, age, gender, height, weight });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kullanıcı Profili</Text>
            <TextInput placeholder="İsim" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Yaş" value={age} onChangeText={setAge} keyboardType="numeric" style={styles.input} />
            <TextInput placeholder="Cinsiyet" value={gender} onChangeText={setGender} style={styles.input} />
            <TextInput placeholder="Boy (cm)" value={height} onChangeText={setHeight} keyboardType="numeric" style={styles.input} />
            <TextInput placeholder="Kilo (kg)" value={weight} onChangeText={setWeight} keyboardType="numeric" style={styles.input} />
            <Button title="Kaydet" onPress={saveProfile} />
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

export default UserProfile;