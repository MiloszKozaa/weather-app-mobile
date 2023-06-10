import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenDisplay} from './src/services';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screenDisplay.map((params, key) => (
          <Stack.Screen key={key} {...params} options={{headerShown: false}} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
