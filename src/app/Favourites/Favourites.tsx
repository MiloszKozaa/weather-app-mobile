import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import appStyles from '../../styles';
import {Icon, Navbar} from '../../components';
import {icons} from '../../constants';

const Favourites = ({navigation}: any) => {
  return (
    <View style={appStyles.screen}>
      <Navbar
        right={
          <Icon
            source={icons.arrowLeft}
            onClick={() => navigation.navigate('Home')}
          />
        }
      />
    </View>
  );
};

export default Favourites;
