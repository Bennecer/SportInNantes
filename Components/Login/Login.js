import React, { Component } from 'react'
import { View, Button, StyleSheet, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Reinput from 'reinput'

export default class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      mdp: ''
    }
  }

  connect(){
    if(this.state.email === "Admin" && this.state.mdp === "Admin") this.props.navigation.navigate('login')
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.base}>
        <Text style={styles.appName}>Sport'In Nantes</Text>
        <Text style={styles.intro}>Equipements sportifs et comunauté sportive Nantaise !</Text>
        <Image style={styles.logo} source={require('../../assets/iconSportInNantes.png')}/>
        
        <View style={styles.inputs}>
          <Reinput
            label='Email'
            onChangeText={(email) => this.setState({email})}
            activeColor="#892685"
          />
          <Reinput
            label='Mot de Passe'
            onChangeText={(mdp) => this.setState({mdp})}
            activeColor="#892685"
          />
        </View>
        
        <TouchableOpacity style={styles.connectButton} onPress={() => this.connect()} >
          <Text style={styles.connectText}>Se Connecter</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flexGrow: 1
  },
  logo : {
    marginVertical: 30,
    alignSelf: "center",
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  appName: {
    alignSelf: "center",
    marginTop: 20,
    color: "#892685",
    fontSize: 40,
    fontFamily: 'poppins_bold'
  },
  intro: {
    alignSelf: "center",
    color: "#EE7123",
    fontSize: 14,
    marginHorizontal: 40,
    marginTop: 10,
    fontFamily: 'poppins',
    textAlign: "center"
  },

  inputs: {
    width: 300,
    alignSelf: 'center'
  },

  connectButton: {
    paddingTop:5,
    paddingBottom:3,
    backgroundColor:"#892685",
    borderRadius:20,
    width: 120,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android,
    alignSelf: 'center',
    marginTop: 50
  },
  connectText : {
    fontSize: 14,
    fontFamily: 'poppins_bold',
    color: 'white',
    textAlign: 'center'
  }
})