import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import sports from '../../Helpers/sportsData'

const numberColumns= 3;

class PlaceDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            place: undefined,
            isLoading: true,
            date: new Date(),
            today: new Date(),
            sports: sports
        }
    }

    componentDidMount(){
        this.setState({
            place: this.props.navigation.state.params.place,
            isLoading: false,
            date: this.props.navigation.state.params.date
        })
    }

    _displayPlace(){
        const place = this.state.place;
        if(place != undefined){
            return(
                <ScrollView style={styles.scrollview_container}>
                    <View style={styles.image_container}>
                      <Image style={styles.image} source={place.img}/>
                    </View>
                    <View style={styles.top_place_container}>
                        <Text style={styles.place}>{place.name}</Text>
                        <View style={styles.rate_container}>
                            <Text style={styles.rate}>{place.rating}</Text>
                            <Icon style={styles.star} name="star" type="font-awesome" color="#f9f227" size={30}></Icon>
                        </View>
                    </View>
                    <Text style={styles.address}>{place.address}</Text>
                    <FlatList
                        data={place.sport}
                        keyExtractor = {(item) => item}
                        style={styles.list}
                        numColumns={numberColumns}
                        renderItem={({item}) => <Image style={styles.sportImage} />}
                    />
                    <Text style={styles.sports}>{place.sports}</Text>
                    <Text style={styles.hours}>Horaires : {place.hours}</Text>
                    <Text style={styles.create}>Vous pouvez rapidement créer un événement sur ce lieu et à la date sélectionnée en appuyant sur le bouton ci-dessous. Il ne vous restera plus qu’à préciser le sport, l’heure et le nombre de participants !</Text>
                    <TouchableOpacity style={styles.button} underlayColor='#fff'>
                        <Text style={styles.buttonText}>Créer</Text>
                    </TouchableOpacity>
                </ScrollView>
            )
        }
    }

    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }

    render() {
        const idPlace = this.props.navigation.state.params.idPlace;
        const { goBack } = this.props.navigation;
        return (
            
        <View style={styles.main_container}>
            <View style={styles.top_container}>
                <Icon style={styles.arrow_back} name="arrow-left" type="font-awesome" color="#892685" size={30} onPress={() => goBack()}></Icon>
                <DatePicker
                    style={styles.datepicker}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate={this.state.today}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {
                        this.setState({date: date});
                        this.props.navigation.state.params.changeDate(date);
                    }}
                />
            </View>
            {this._displayPlace()}
            {this._displayLoading()}
        </View>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%'
  },

  top_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin : 10,
    marginTop: 20
  },
  arrow_back: {
  },
  datepicker: {
  },

  image_container:{
  },
  image: {
      resizeMode: 'contain',
      width: '100%',
      height: 196
  },
  top_place_container: {
      justifyContent: 'space-between',
      flexDirection: 'row',
  },
  place: {
    margin: 10,
    marginTop: 15,
    color: "#EE7123",
    fontSize: 16,
    fontFamily: 'poppins_bold'
  },
  rate_container: {
    margin: 10,
    flexDirection: 'row'
  },
  rate: {
    fontSize: 22,
    color: '#666666',
    fontFamily: 'poppins_bold',
    marginRight: 5
  },
  star: {
  },

  address: {
    marginHorizontal: 10,
    fontFamily: 'poppins_italic'
  },

  sports: {
    fontFamily: 'poppins',
    margin: 20
  },

  hours: {
    fontFamily: 'poppins',
    margin: 10,
    fontSize: 16
  },

    create: {
        margin: 10,
        fontFamily: 'poppins'
    },
        create_container: {
        alignSelf: 'center',
        width: 80
    },

    button: {
        alignSelf: 'center',
        paddingTop:5,
        paddingBottom:3,
        backgroundColor:"#892685",
        borderRadius:20,
        width: 80,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'poppins_bold',
        color: 'white',
        textAlign: 'center'
    },

  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
    },
})

export default PlaceDetail;