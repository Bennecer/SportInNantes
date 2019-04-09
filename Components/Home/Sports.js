import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import SportItem from './SportItem';
import sports from '../../Helpers/sportsData'

const numberColumns = 3;

class Sports extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            sports: sports,
            sportsSelected: []
        }

        this.handlerSports = this.handlerSports.bind(this)
    }

    handlerSports(sportsSelectedArray) {
        this.setState({
            sportsSelected: sportsSelectedArray
        })
    }

    render(){
        return(
            <View style={styles.main_container}>
                <FlatList
                    data={sports}
                    keyExtractor = {(item) => item.name}
                    style={styles.list}
                    numColumns={numberColumns}
                    renderItem={({item}) => <SportItem handlerSports = {this.handlerSports} sport={item} sportsSelected={this.state.sportsSelected}/>}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Places", {sportsSelected : this.state.sportsSelected})} style={styles.button} underlayColor='#fff'>
                    <Text style={styles.buttonText}>Confirmer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
    },

    list: {
        flex: 1,
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
});

export default Sports;