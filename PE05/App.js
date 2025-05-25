import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import AddCountry from './src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ cities }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities">{(props) => <Cities {...props} cities={cities} />}</Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const addCity = (city) => setCities((prev) => [...prev, city]);
  const addCountry = (country) => setCountries((prev) => [...prev, country]);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CitiesNav">{(props) => <CitiesStackScreen {...props} cities={cities} />}</Tab.Screen>
        <Tab.Screen name="AddCity">{(props) => <AddCity {...props} addCity={addCity} />}</Tab.Screen>
        <Tab.Screen name="Countries">{(props) => <Countries {...props} countries={countries} />}</Tab.Screen>
        <Tab.Screen name="AddCountry">{(props) => <AddCountry {...props} addCountry={addCountry} />}</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
