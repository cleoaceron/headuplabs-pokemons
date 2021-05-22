import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import styles from './style';

const PokemonCard = ({name, url}) => {
  return (
    <>
      <Card>
        <Card.Title style={{alignSelf: 'flex-start'}}>{name}</Card.Title>
        <Card.Divider />
        <View style={styles.pokemon}>
          <Text style={[styles.boldText, {fontSize: 14}]}>{url}</Text>
        </View>
      </Card>
    </>
  );
};

export default PokemonCard;
