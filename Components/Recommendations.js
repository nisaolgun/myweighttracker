import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Recommendations = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diyet Önerileri</Text>
      <Text>1. Günde en az 2 litre su içmeyi hedefleyin.</Text>
      <Text>2. Sebze ve meyve tüketimini artırın.</Text>
      <Text>3. İşlenmiş gıdalardan kaçının.</Text>
      
      <Text style={styles.title}>Egzersiz Önerileri</Text>
      <Text>1. Haftada en az 150 dakika aerobik egzersiz yapın.</Text>
      <Text>2. Güçlendirme egzersizlerini haftada 2 gün uygulayın.</Text>
      <Text>3. Günlük yürüyüş yapmayı alışkanlık haline getirin.</Text>
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
  });

  export default Recommendations;
  