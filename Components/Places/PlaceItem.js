import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';

class PlaceItem extends React.Component {
  render() {
    const {place, displayDetailForPlace} = this.props;
      
    return (
      <TouchableOpacity 
        onPress={() => displayDetailForPlace(place.id)}
        style={styles.main_container}>
        <Image style={styles.image} source={place.img}/>
        <View style={styles.content_container}>
            <View style={styles.header_container}>
                <Text style={styles.title_text}>{place.name}</Text>
                <View style={styles.rate_container}>
                    <Text style={styles.rate}>{place.rating}</Text>
                    <Icon style={styles.star} name="star" type="font-awesome" color="#f9f227" size={23}></Icon>
                </View>
            </View>
            <View style={styles.description_container}>
                <Text style={styles.description_text}>{place.address}</Text>
            </View>
            <View style={styles.date_container}>
                <Text style={styles.date_text}>Horaires : {place.hours}</Text>
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
  image : {
    width: 150,
    height: 100,
    margin: 5,
  },
  content_container : {
    flex: 1,
    margin: 5
  },
  header_container : {
    flexDirection: 'row',
    flex: 3
  },
  title_text: {
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    color: '#EE7123',
    fontFamily: 'poppins_bold'
  },
  rate_container: {
    flexDirection: 'row'
  },
  rate: {
    fontSize: 16,
    color: '#666666',
    fontFamily: 'poppins_bold',
    marginRight: 5
  },
  star: {
  },
  description_container: {
      flex: 2,
  },
  description_text: {
      fontSize: 13,
      color: '#666666',
      fontFamily: 'poppins_italic'
  },
  date_container: {
      flex: 1,
  },
  date_text: {
    textAlign: 'right',
    fontSize: 13,
    fontFamily: 'poppins'
  }
})

export default PlaceItem