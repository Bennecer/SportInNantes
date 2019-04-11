import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
  Picker,
  KeyboardAvoidingView

} from "react-native";
import { Icon } from "react-native-elements";
import DatePicker from 'react-native-datepicker';
import { TextInput } from "react-native-gesture-handler";

class CreateEvent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        place: undefined,
        isLoading: true,
        date: new Date(),
        sportSelected: '',
        description: '',
        numberMax: '1'
    }
  }

  componentDidMount(){
      this.setState({
          place: this.props.navigation.state.params.place,
          isLoading: false,
          sportSelected: this.props.navigation.state.params.place.sports[0]
      })
  }

  createEvent(){
    console.log(this.state.date)
    let dateEvent = 'Vendredi '+this.state.date.split('-')[0]+ ' Avril à 15h';
    let event = {
      id: 7,
      name: "Axel",
      profilePic: require('../../assets/profilePics/axel.png'),
      bio: "Salut ! Je m'appelle Axel, j'ai hâte de faire votre connaissance !",
      sport: this.state.sportSelected,
      sportData: this.state.sportSelected,
      sportPic: require('../../assets/sports/natation.png'),
      place : {
         name: this.state.place.name,
         rating: this.state.place.rating,
         address : this.state.place.address,
         sports: this.state.place.sports,
         hours: this.state.place.hours,
         latitude: this.state.place.latitude,
         longitude: this.state.place.longitude,
         img: this.state.place.img
      },
      rating: "Agréable",
      description: this.state.description,
      date: dateEvent,
      participants: [
      ],
      numberMax: this.state.numberMax
    }
    
    let newEvents = [];
    AsyncStorage.getItem('myEvents', (err, result) => {
      newEvents = JSON.parse(result);
      newEvents.push(event)
    }).then(() => {
      AsyncStorage.setItem('myEvents', JSON.stringify(newEvents), () => {
        this.props.navigation.navigate("Profile");
      })
    })
  }

  changeDate = (date) =>{
    this.setState({date: date});
  }

  _displayPlaceCreate() {
    const place = this.state.place;
    if (place != undefined) {
      let sportItems = place.sports.map( (s, i) => {
          return <Picker.Item key={i} value={s} label={s} />
      });
      return (
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={50} enabled>
          <ScrollView style={styles.scrollview_container}>
            <Text style={styles.title}>Sélectionner un sport</Text>
            <Picker
              selectedValue={this.state.place.sports[0]}
              style={{height: 50, width: 150, alignSelf: 'center'}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({sportSelected: itemValue})
              }>
              {sportItems}
            </Picker>
            <Text style={styles.title}>Lieu</Text>
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
            <Text style={styles.title}>Description</Text>
            <TextInput multiline = {true} numberOfLines = {6} style={{padding: 10, margin: 10, borderWidth: 0.5}} onChangeText={(text) => this.setState({description: text})}></TextInput>
            <Text style={styles.title}>Sélectionner le nombre maximum de participants</Text>
            <TextInput style={{width: 50, borderWidth: 0.5, alignSelf: 'center', margin: 10, textAlign:'center'}} value={this.state.numberMax} onChangeText={(text) => this.setState({numberMax: text})}></TextInput>
            <TouchableOpacity onPress={() => this.createEvent()} style={styles.button} underlayColor='#fff'>
                <Text style={styles.buttonText}>Créer</Text>
            </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      );
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  render() {
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
        {this._displayPlaceCreate()}
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',

    marginBottom: 70
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


  title: {
    margin: 10,
    color: "#892685",
    fontFamily: "poppins_bold",
    fontSize: 14
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
    fontFamily: 'poppins_italic',
    alignSelf: 'center'
  },

  sports: {
    fontFamily: 'poppins',
    margin: 20
  },
  sportImage: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
    margin: 10
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
      marginTop: 20,
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
      elevation: 2, // Android,
      marginBottom: 20
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
});

export default CreateEvent;
