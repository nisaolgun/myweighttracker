import React, {useState} from 'react';
import { View ,TextInput,Button,StyleSheet } from 'react-native';

const WeightInput =({onSubmit}) => {
    const [weight ,setweight] = useState('');

    const handleSubmit = () => {
        if(weight) {
            onSubmit (weight);
            setweight('');
        }
    };
    return (
        <View style = {StyleSheet.container}>
            <TextInput
            style ={StyleSheet.input}
            placeholder="kilonuzu girin"
            value={weight}
            onChangeText={setweight}
            keyboardType='numeric'
            />
            <Button title ="Ekle" onPress={handleSubmit} />
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
    export default WeightInput;