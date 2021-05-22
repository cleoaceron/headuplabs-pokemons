import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pokemon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  boldText: {
    fontWeight: '600',
  },
  cardButton: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  description: {
    marginVertical: 10,
  },
});

export default styles;
