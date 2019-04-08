import React from 'react';
import Navigation from './Navigation/Navigation';
import { View } from 'react-native';
import GeneralStatusBarColor from './Components/GeneralStatusBarColor';
import { Font } from 'expo';

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'poppins': require('./assets/fonts/poppins.ttf'),
      'poppins_bold': require('./assets/fonts/poppins_bold.ttf'),
      'poppins_italic': require('./assets/fonts/poppins_italic.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state && this.state.fontLoaded ?
      <View style={{flex:1}}>
        <GeneralStatusBarColor backgroundColor="#892685" barStyle="light-content" /> 
        
        <Navigation/>
      </View>
    :null
  }
}

