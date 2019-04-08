import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import sports from '../../Helpers/sportsData'

class SportItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selected: false,
        } 
    }

    changeColor(){
        if(this.state.selected){
            this.setState({selected: false});
            let sportsSelected = this.props.sportsSelected;
            sportsSelected.filter(sport => sport !== this.props.sport.name);
            for(let i=0; i<sportsSelected.length; i++){
                if(sportsSelected[i] === this.props.sport.name){
                    sportsSelected.splice(i, 1);
                }
            }
            this.props.handlerSports(sportsSelected);
        }
        else{
            this.setState({selected: true});
            let sportsSelected = this.props.sportsSelected;
            let isAlreadyThere = false;
            for(let i=0; i<sportsSelected.length; i++){
                if(sportsSelected[i] === this.props.sport.name){
                    isAlreadyThere = true;
                }
            }
            if(!isAlreadyThere) sportsSelected.push(this.props.sport.name)
            this.props.handlerSports(sportsSelected);
        }
    }

    render(){
        const sport = this.props.sport.name;
        const image = this.props.sport.image;
        const imageSelected = this.props.sport.imageSelected;

        return (
            <TouchableOpacity 
                onPress={() => this.changeColor()}
                style={styles.sportItem}>
                <Image style={styles.sportImage} source={this.state.selected ? imageSelected : image}/>
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    sportItem: {
        flex: 1,
        margin: 10,
        width: 100,
        height: 100
    },
    sportImage: {
        resizeMode: 'contain',
        width: 100,
        height: 100
    }
});

export default SportItem;