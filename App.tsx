import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Favourites, Home, Start, Loading, Map, Search} from './src/app';
import {ICoord} from './src/models/city/coord';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParams = {
  Start: ICoord;
  Home: ICoord;
  Favourites: any;
  Loading: any;
  Map: any;
  Search: any;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParams>();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Loading"
          component={Loading}
          options={{headerShown: false}}
        />
        <Screen name="Start" component={Start} options={{headerShown: false}} />
        <Screen name="Home" component={Home} options={{headerShown: false}} />
        <Screen
          name="Favourites"
          component={Favourites}
          options={{headerShown: false}}
        />
        <Screen name="Map" component={Map} options={{headerShown: false}} />
        <Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
