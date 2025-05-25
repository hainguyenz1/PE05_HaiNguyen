import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default function AddCountry({ addCountry, navigation }) {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const submit = () => {
    if (!name || !currency) {
      alert('Please complete the form');
      return;
    }
    addCountry({ name, currency });
    setName('');
    setCurrency('');
    navigation.navigate('Countries');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Countries</Text>
      <TextInput placeholder="Country Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Currency" value={currency} onChangeText={setCurrency} style={styles.input} />
      <TouchableOpacity onPress={submit}>
        <View style={styles.button}><Text style={styles.buttonText}>Add Country</Text></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.primary, flex: 1, justifyContent: 'center' },
  heading: { color: 'white', fontSize: 40, marginBottom: 10, alignSelf: 'center' },
  input: { margin: 10, backgroundColor: 'white', paddingHorizontal: 8, height: 50 },
  button: { height: 50, backgroundColor: '#666', justifyContent: 'center', alignItems: 'center', margin: 10 },
  buttonText: { color: 'white', fontSize: 18 },
});
