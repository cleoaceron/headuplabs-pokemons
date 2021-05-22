import React from 'react';
import {SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import {scale} from 'utils/scale';

const ScrollContainer = ({
  children,
  padding = 0,
  addStyles = {},
  pokemonLimit,
  setPokemonLimit,
  refreshing,
  onRefresh,
}) => {
  const onScrollEnd = ({layoutMeasurement, contentOffset, contentSize}) =>
    layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={[{padding: scale(padding)}, addStyles]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{flexGrow: 1}}
        bounces={true}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
        onScroll={({nativeEvent}) => {
          if (onScrollEnd(nativeEvent)) {
            setPokemonLimit(pokemonLimit + 25);
          }
        }}
        scrollEventThrottle={400}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScrollContainer;
