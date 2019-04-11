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
import EventItem from "../Events/EventItem"
import events from "../../Helpers/profilesData";
import { NavigationEvents } from "react-navigation";

const numberColumns = 4;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: undefined,
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      events: events,
      isLoading: false
    });
    this._getData();
  }

  componentDidUpdate() {
    this._getData();
  }

  _getData = async () => {
    try {
      AsyncStorage.getItem("myEvents", (err, result) => {
        this.setState({
          events: result !== null ? JSON.parse(result) : []
        })
      });
    } catch (e) {
      // error reading value
    }
  };

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  _displayDetailForEvent = (idEvent) => {
    const event = this.state.events.find(event => event.id === idEvent);
    this.props.navigation.navigate("EventDetail", { idEvent: idEvent, event: event});
  }

  render() {
    //const eventPlace = this.props.navigation.state.params.idEvent;
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.main_container}>
        <NavigationEvents
          onDidFocus={payload => {
            this._getData();
          }}
        />
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.profilePic}
            source={require("../../assets/profilePics/alex.png")}
          />
          <Text style={styles.name_text}>Alex</Text>
          <Text style={styles.description_title}>Description</Text>
          <Text style={styles.description_text}>Salut ! Je m'appelle Alex, hâte de faire votre connaissance !</Text>

          <Text style={styles.participants_title}>{this.state.events.length > 0 ? 'Mes événements' : ''}</Text>

          <FlatList
            data={this.state.events}
            keyExtractor={item => item}
            style={styles.list}
            renderItem={({ item, index }) => {
              if (this.state.events.length > 0) {
                return (
                  //TODO get du storage
                  <EventItem event={item} displayDetailForEvent={this._displayDetailForEvent}/>
                );
              }
            }}
          />
          <Text style={styles.description_title}>Appréciation Globale</Text>
          <Text style={styles.rating}>Agréable</Text>
        </ScrollView>
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },

  profilePic: {
    alignSelf: 'center',
    marginTop: 30,
    width: 200,
    height: 200,
    margin: 5
  },
  name_text: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 28,
    color: "#892685",
    fontFamily: "poppins_bold"
  },

  description_title: {
    margin: 10,
    color: "#892685",
    fontFamily: "poppins_bold",
    fontSize: 14
  },
  description_text: {
    marginHorizontal: 10,
    fontFamily: "poppins",
    fontSize: 14
  },

  participants_title: {
    margin: 10,
    color: "#892685",
    fontFamily: "poppins_bold",
    fontSize: 14
  },

  rating: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    color: "#666666",
    fontFamily: "poppins_bold"
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

export default Profile;
