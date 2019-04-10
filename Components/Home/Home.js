import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import Sports from './Sports';
import sports from '../../Helpers/sportsData'
import sportsList from '../../Helpers/sportsList'


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            sports: sports,
            sportsSelected: sportsList
        }
        if(AsyncStorage.getItem('sportsSelected') !== null){
            AsyncStorage.setItem('sportsSelected', JSON.stringify([]), () => {
            })
        }
        else{
            AsyncStorage.mergeItem('sportsSelected', JSON.stringify([]), () => {
            })
        }

        this.handlerSports = this.handlerSports.bind(this)
    }

    handlerSports(sportsSelectedArray) {
        this.setState({
            sportsSelected: sportsSelectedArray
        })
    }

    _storeData = async () => {
        try {
            if(AsyncStorage.getItem('sportsSelected') !== null){
                AsyncStorage.setItem('sportsSelected', JSON.stringify(this.state.sportsSelected), () => {
                    this.props.navigation.push("Places", {sportsSelected : this.state.sportsSelected.length>0 ? this.state.sportsSelected : sportsList})
                })
            }
            else{
                AsyncStorage.mergeItem('sportsSelected', JSON.stringify(this.state.sportsSelected), () => {
                    this.props.navigation.push("Places", {sportsSelected : this.state.sportsSelected.length>0 ? this.state.sportsSelected : sportsList})
                })
            }
        } catch (e) {
          // saving error
        }
    }

    confirmButton(){
        this._storeData();
    }

    render(){
        return(
            <View style={styles.main_container}>
                <ScrollView>
                    <Image style={styles.logo} source={require('../../assets/iconSportInNantes.png')}/>
                    <Text style={styles.welcome}>Bienvenue !</Text>
                    <Text style={styles.intro}>Quels sports voulez-vous pratiquer aujourd'hui ?</Text>
                    <Sports navigation={this.props.navigation} handlerSports = {this.handlerSports} sportsSelected={this.state.sportsSelected}></Sports>
                </ScrollView>

                <TouchableOpacity onPress={() => this.confirmButton()} style={styles.button} underlayColor='#fff'>
                    <Text style={styles.buttonText}>Confirmer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    logo : {
        marginTop: 30,
        alignSelf: "center",
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    welcome: {
        alignSelf: "center",
        marginTop: 10,
        color: "#892685",
        fontSize: 40,
        fontFamily: 'poppins_bold'
    },
    intro: {
        alignSelf: "center",
        color: "#EE7123",
        fontSize: 14,
        marginHorizontal: 40,
        fontFamily: 'poppins',
        textAlign: "center"
    },


    button: {
        paddingTop:5,
        paddingBottom:3,
        backgroundColor:"#892685",
        borderRadius:20,
        width: 120,
        position: 'absolute',
        bottom: 20,
        right: 8,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'poppins_bold',
        color: 'white',
        textAlign: 'center'
    },
});

export default Home;