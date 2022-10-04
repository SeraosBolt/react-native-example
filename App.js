
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import LetraMusica from './pages/Letra-Musica';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='Home' component={Home} />
          <stack.Screen name='Letra-Musica' component={LetraMusica} />
        </stack.Navigator>
      </NavigationContainer>
  );
}


