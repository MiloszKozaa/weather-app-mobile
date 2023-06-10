import {View} from 'react-native';
import React from 'react';
import {icons} from '../../constants';
import appStyles from '../../styles';
import {Icon, Navbar} from '../../components';
import {CityCard, DayCard} from './components';

const Start = () => {
  return (
    <View style={appStyles.screen}>
      <Navbar
        text="Toronto"
        left={<Icon source={icons.menu} />}
        right={<Icon source={icons.heart} />}
      />

      <CityCard />
      <View>
        <DayCard />
      </View>
    </View>
  );
};

export default Start;
