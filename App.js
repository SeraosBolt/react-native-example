
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import LetraMusica from './pages/Letra-Musica';
import PlanetasHome from './pages/Planetas/planetas-home';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          <stack.Screen name='Home' component={Home} />
          <stack.Screen name='Letra-Musica' component={LetraMusica} />
          <stack.Screen name='Planeta-Home' component={PlanetasHome} />
        </stack.Navigator>
      </NavigationContainer>
  );
}


