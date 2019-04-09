import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'


export default class Login extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Button
          title='Login'
          onPress={() => this.props.navigation.navigate('login')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})