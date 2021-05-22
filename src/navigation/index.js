import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import Home from 'screens/public/HomeScreen';

import {actionCreator} from 'ducks';

const Stack = createStackNavigator();

const RootNavigator = ({...props}) => {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = ({pokemons}) => ({pokemons});
export default connect(mapStateToProps, {actionCreator})(RootNavigator);
