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
  AsyncStorage
} from "react-native";
import { Icon } from "react-native-elements";

const numberColumns = 4;
let isParticipating = false;

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: undefined,
      isLoading: true,
      isParticipating: false
    };
  }

  componentDidMount() {
    this.setState({
      event: this.props.navigation.state.params.event,
      isLoading: false
    });
  }

  participate(){
    if(this.state.isParticipating){
      let tab = this.state.event;
      for(let i=0; i<this.state.event.participants.length; i++){
        if(tab.participants[i].name === "Alex"){
          tab.participants.splice(i, 1)
        }
      }
      this.setState({
        isParticipating : false,
        event: tab
      })
      let myEvents = JSON.parse(AsyncStorage.getItem('myEvents'));
      myEvents.push(this.state.event);
      if(myEvents.length < 0){
        AsyncStorage.setItem('myEvents', JSON.stringify(myEvents), () => {
        })
      }
      else{
          AsyncStorage.mergeItem('myEvents', JSON.stringify(myEvents), () => {
          })
      }
    }
    else{
      let tab = this.state.event;
      tab.participants.push({name: 'Alex', profilePic: require('../../assets/profilePics/alex.png')})
      this.setState({
        isParticipating : true,
        event: tab
      })
      //TODO enlever du storage
    }
  }

  _displayEvent() {
    const event = this.state.event;
    if (event != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <View style={styles.name_container}>
            <View style={styles.pic_container}>
              <Image style={styles.profilePic} source={event.profilePic} />
            </View>
            <View style={styles.info_container}>
              <Text style={styles.name_text}>{event.name}</Text>
              <Text style={styles.rating}>{event.rating}</Text>
            </View>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_title}>Description</Text>
            <Text style={styles.description_text}>{event.description}</Text>
          </View>
          <View style={styles.top_place_container}>
            <Text style={styles.place}>{event.place.name}</Text>
            <View style={styles.rate_container}>
              <Text style={styles.rate}>{event.place.rating}</Text>
              <Icon
                style={styles.star}
                name="star"
                type="font-awesome"
                color="#f9f227"
                size={30}
              />
            </View>
          </View>
          <View style={styles.image_container}>
            <Image style={styles.image} source={event.place.img} />
          </View>
          <Text style={styles.address}>{event.place.address}</Text>

          <View style={styles.date_container}>
            <Text style={styles.date_text}>{event.date}</Text>
          </View>

          <View style={styles.participants_container}>
            <Text style={styles.participants_title}>Participants</Text>
            <Text style={styles.participants_text}>
              {event.participants.length}/{event.numberMax}
            </Text>
          </View>
          <FlatList
            data={event.participants}
            keyExtractor={item => item}
            style={styles.list}
            numColumns={numberColumns}
            renderItem={({ item, index }) => {
              if (index < 4) {
                return (
                  <Image
                    style={styles.participants_image}
                    source={item.profilePic}
                  />
                );
              }
            }}
          />
          <TouchableOpacity onPress={() => this.participate()} style={!this.state.isParticipating ? styles.button : styles.buttonDisabled} underlayColor="#fff">
            <Text style={styles.buttonText}>{!this.state.isParticipating ? 'Participer' : "Annuler"}</Text>
          </TouchableOpacity>
        </ScrollView>
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
    const eventPlace = this.props.navigation.state.params.idEvent;
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.main_container}>
        <View style={styles.top_container}>
          <Icon
            style={styles.arrow_back}
            name="arrow-left"
            type="font-awesome"
            color="#892685"
            size={30}
            onPress={() => goBack()}
          />
        </View>
        {this._displayEvent()}
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: "column",
    width: "100%"
  },

  top_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 20
  },
  arrow_back: {},

  name_container: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20
  },
  pic_container: {
    width: 100
  },
  profilePic: {
    width: 80,
    height: 80,
    margin: 5
  },
  info_container: {
    flex: 1,
    flexDirection: "column"
  },
  name_text: {
    fontSize: 18,
    color: "#892685",
    fontFamily: "poppins_bold"
  },
  rating: {
    fontSize: 14,
    color: "#666666",
    fontFamily: "poppins_bold"
  },

  description_container: {
    flex: 1,
    margin: 10
  },
  description_title: {
    color: "#892685",
    fontFamily: "poppins_bold",
    fontSize: 14
  },
  description_text: {
    fontFamily: "poppins",
    fontSize: 14
  },

  top_place_container: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  place: {
    margin: 10,
    marginTop: 15,
    color: "#892685",
    fontSize: 16,
    fontFamily: "poppins_bold"
  },
  rate_container: {
    margin: 10,
    flexDirection: "row"
  },
  rate: {
    fontSize: 22,
    color: "#666666",
    fontFamily: "poppins_bold",
    marginRight: 5
  },
  image_container: {},
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 196
  },
  address: {
    textAlign: "right",
    marginHorizontal: 10,
    fontFamily: "poppins_italic"
  },

  date_container: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#892685",
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    alignSelf: "center",
    marginVertical: 10
  },
  date_text: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: "poppins"
  },

  participants_container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10
  },
  participants_title: {
    color: "#892685",
    fontFamily: "poppins_bold",
    fontSize: 14
  },
  participants_text: {
    color: "#892685",
    fontFamily: "poppins",
    fontSize: 14,
    marginLeft: 8
  },
  participants_image: {
    resizeMode: "contain",
    width: 70,
    height: 70,
    margin: 10
  },

  button: {
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 3,
    backgroundColor: "#892685",
    borderRadius: 20,
    width: 120,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android,
    marginBottom: 20,
    marginTop: 10
  },
  buttonDisabled: {
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 3,
    backgroundColor: "#666666",
    borderRadius: 20,
    width: 120,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android,
    marginBottom: 20,
    marginTop: 10
  },
  buttonText: {
    fontSize: 15,
    fontFamily: "poppins_bold",
    color: "white",
    textAlign: "center"
  },

  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default EventDetail;
