import React from 'react'
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import places from '../../Helpers/placesData'
import PlaceItem from './PlaceItem'
import DatePicker from 'react-native-datepicker';

class Places extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        places : places,
        isLoading : true,
        date: new Date(),
        today: new Date(),
    }
  }

  componentDidMount(){
    this.setState({
        places: places,
        isLoading: false,
        sportsSelected: this.props.navigation.state.params
    })
    console.log(this.props.navigation.state.params)
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

  _displayDetailForPlace = (idPlace) => {
      const place = this.state.places.find(place => place.id === idPlace);
      this.props.navigation.navigate("PlaceDetail", { idPlace: idPlace, place: place, date: this.state.date, changeDate: this.changeDate});
  }

  changeDate = (date) =>{
    this.setState({date: date});
  }

  render(){
      return(
          <View style={styles.main_container}>
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
                  onDateChange={(date) => {this.setState({date: date})}}
              />
              <FlatList
                  data={this.state.places}
                  keyExtractor = {(item) => item.id.toString()}
                  onEndReachedThreshold = {0.5}
                  onEndReached = {() => {
                      console.log("onEndReached");
                  }}
                  renderItem={({item}) => <PlaceItem place={item} date={this.state.date} displayDetailForPlace={this._displayDetailForPlace}/>}
              />
              {this._displayLoading()}
          </View>
      );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
  },
  datepicker: {
    marginTop: 10,
    marginRight: 10,
    alignSelf: 'flex-end'
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Places