import React from 'react'
import { StyleSheet, AsyncStorage, View, FlatList, ActivityIndicator, Text } from 'react-native';
import events from '../../Helpers/profilesData'
import EventItem from './EventItem'
import DatePicker from 'react-native-datepicker';
import sportsList from '../../Helpers/sportsList';
import { NavigationEvents } from "react-navigation";

class Events extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        events : events,
        isLoading : true,
        date: new Date(),
        today: new Date(),
        sportsSelected: sportsList
    }
    AsyncStorage.getItem('sportsSelected', (err, result) => {
      this.setState({
        sportsSelected: JSON.parse(result).length > 0 ? JSON.parse(result) : sportsList
      })
    })
  }

  componentDidMount(){
    this.setState({
        isLoading: false,
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    //console.log("nextState", nextState, "nextProps", nextProps)
    return true;
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

  _displayDetailForEvent = (idEvent) => {
      const event = this.state.events.find(event => event.id === idEvent);
      this.props.navigation.navigate("EventDetail", { idEvent: idEvent, event: event});
  }

  _getData = async () => {
    await AsyncStorage.getItem('sportsSelected', (err, result) => {
      this.setState({
        sportsSelected: JSON.parse(result).length > 0 ? JSON.parse(result) : sportsList
      })
      console.log("in get data", this.state.sportsSelected)
      this.forceUpdate();
    }) 
  }

  changeDate = (date) =>{
    this.setState({date: date});
  }

  render(){
    console.log("render");
    let hasEvents = false;
      return(
          <View style={styles.main_container}>
            <NavigationEvents
              onDidFocus={payload => {
                this._getData();
                console.log("in render", this.state.sportsSelected)
              }}
            />
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
                  data={this.state.events}
                  keyExtractor = {(item) => item.id.toString()}
                  renderItem={({item, index}) => {
                    let isSelected= false;
                    for(let j=0; j<this.state.sportsSelected.length; j++){
                      if(item.sportData === this.state.sportsSelected[j]){
                        isSelected = true;
                        hasEvents = true;
                      }
                    }
                    
                    if(isSelected){
                      console.log(item)
                      return <EventItem event={item} displayDetailForEvent={this._displayDetailForEvent}/>
                    }
                    else{
                      if(index === this.state.events.length-1 && !hasEvents){
                        return <Text style={styles.noEvents}>Aucun événement correspondant à votre recherche.</Text>
                      }
                    }
                  }}
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

  noEvents: {
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: 'poppins_bold',
    marginTop: 200,
    textAlign: 'center'
  }
});

export default Events