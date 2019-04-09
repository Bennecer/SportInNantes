import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Sports from './Sports';

class Home extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.main_container}>
                <Image style={styles.logo} source={require('../../assets/iconSportInNantes.png')}/>
                <Text style={styles.welcome}>Bienvenue !</Text>
                <Text style={styles.intro}>Quels sports voulez-vous pratiquer aujourd'hui ?</Text>
                <Sports navigation={this.props.navigation}></Sports>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
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
    }
});

export default Home;