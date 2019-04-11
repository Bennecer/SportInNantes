import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { Icon } from 'react-native-elements';
import Events from './Events';

const numberColumns= 4;

class EventItem extends React.Component {
  render() {
    const {event, displayDetailForEvent} = this.props;
    return (
      <TouchableOpacity 
        onPress={() => displayDetailForEvent(event.id)}
        style={styles.main_container}>
        <Image style={styles.profilePic} source={event.profilePic}/>
        <View style={styles.content_container}>
            <View style={styles.header_container}>
                <View style={styles.name_container}>
                  <Text style={styles.name_text}>{event.name}</Text>
                  <Image style={styles.sportPic} source={event.sportPic}/>
                </View>
                <View style={styles.participants_container}>
                  <FlatList
                      data={event.participants}
                      keyExtractor = {(item) => item}
                      style={styles.list}
                      numColumns={numberColumns}
                      renderItem={({item, index}) => {
                          if(index < 3){
                              return <Image style={styles.participantImage} source={item.profilePic}/>
                          }
                      }}
                  />
                  <Text style={styles.participants_text}>{event.participants.length > 0 ? event.participants.length : ''}</Text>
                </View>
            </View>
            <View style={styles.description_container}>
                <Text style={styles.description_text}>{event.sport}, {event.place.name}</Text>
            </View>
            <View style={styles.date_container}>
                <Text style={styles.date_text}>{event.date}</Text>
            </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 110,
    marginTop: 10,
    flexDirection: 'row',
  },
  profilePic : {
    width: 80,
    height: 80,
    margin: 5,
  },

  content_container : {
    flex: 1,
    margin: 5
  },

  header_container : {
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'space-between'
  },
  name_container: {
    flexDirection: 'row',
  },
  name_text: {
    fontSize: 16,
    paddingRight: 5,
    color: '#EE7123',
    fontFamily: 'poppins_bold'
  },
  sportPic : {
    width: 25,
    height: 25,
    margin: 5,
  },
  participants_container: {
    flexDirection: 'row'
  },
  participantImage: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
    marginLeft: -10
  },
  participants_text: {
    fontSize: 16,
    marginLeft: 5,
    fontFamily: 'poppins'
  },

  description_container: {
      flex: 2,
  },
  description_text: {
      alignSelf: 'center',
      fontSize: 13,
      color: '#666666',
      fontFamily: 'poppins_italic'
  },
  date_container: {
      flex: 1,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#892685",
      paddingTop: 10,
      paddingBottom: 15
      
  },
  date_text: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'poppins',
  }
})

export default EventItem