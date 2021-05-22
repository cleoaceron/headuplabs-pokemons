import React from 'react';
import {SafeAreaView} from 'react-native';

const Layout = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      {children}
    </SafeAreaView>
  );
};

export default Layout;
