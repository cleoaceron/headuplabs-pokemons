import React from 'react';
import {connect} from 'react-redux';
import {actionCreator, types} from 'ducks';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {ScrollContainer, PokemonCard, Layout} from 'components';

import styles from './style';

const HomeScreen = ({pokemons, ...props}) => {
  const [pokemonLimit, setPokemonLimit] = React.useState(0);
  const [refreshing, setRefreshing] = React.useState(false);

  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Default', value: 'default'},
    {label: 'Upgrade', value: 'upgrade'},
    {label: 'Imposters', value: 'imposters'},
    {label: 'Ultimate', value: 'ultimate'},
  ]);

  React.useEffect(() => {
    (!pokemons.data.length || pokemonLimit || value === 'default') &&
      props.actionCreator({type: types.GET_POKEMONS, payload: pokemonLimit});

    wait(1000).then(() => {
      value === 'upgrade' &&
        props.actionCreator({type: types.UPGRADE_POKEMONS});
      value === 'imposters' &&
        props.actionCreator({type: types.SEARCH_POKEMONS});
      value === 'ultimate' &&
        props.actionCreator({type: types.SEARCH_ULTIMATE_POKEMONS});
    });
  }, [pokemonLimit, value]);

  const onRefresh = () => {
    setRefreshing(true);
    setPokemonLimit(0);
    wait(2000).then(() => {
      props.actionCreator({type: types.CLEAR});
      setRefreshing(false);
    });
  };

  const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout));

  return (
    <Layout>
      {console.log(pokemons.data)}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <ScrollContainer
        pokemonLimit={pokemonLimit}
        setPokemonLimit={setPokemonLimit}
        refreshing={refreshing}
        onRefresh={onRefresh}>
        <View style={[styles.container]}>
          {pokemons.data.length > 0 &&
            pokemons.data.map((item, key) => (
              <PokemonCard key={key} name={item.name} url={item.url} />
            ))}
        </View>
      </ScrollContainer>
    </Layout>
  );
};

const mapStateToProps = ({pokemons}) => ({pokemons});

export default connect(mapStateToProps, {actionCreator})(HomeScreen);
