import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Écran Détails</Text>
      <Text style={styles.text}>Voici quelques informations complémentaires.</Text>
      <Button title="Aller au profil" onPress={() => navigation.navigate('Profil', { nom: 'Sarah' })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffbe7',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3c2f2f',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: '#4d4d4d',
    textAlign: 'center',
  },
});
