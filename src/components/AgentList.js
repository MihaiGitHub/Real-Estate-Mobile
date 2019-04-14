import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import axios from 'axios';
import { ListItem } from 'react-native-elements'
import { Scene, Router, Actions } from 'react-native-router-flux';
import GLOBALS from './common/Globals';

class AgentList extends Component {
    state = { 
        agents: [] 
    };

    componentWillMount() {
        // Returns a promise that .then will be called once the http call is complete
        axios.get(`${GLOBALS.BASE_URL}/agents-list.php`)
            .then(response => this.setState({ agents: response.data.agents }))
            .catch(function (error) {
                console.log(error);
            });
    }

   keyExtractor = (item, index) => index.toString()

   renderItem = ({ item }) => (
        <ListItem
        title={`${item.fname} ${item.lname}`}
        onPress={() => Actions.agentDetail({ id: item.id})}
        subtitle={"Certified Agent"}
        leftAvatar={{ 
            source: { 
                uri: (item.picture == '') ? `${GLOBALS.BASE_URL}/dashboard/img/profile.jpg` : `${GLOBALS.BASE_URL}/${item.picture}`
            } 
        }}
        />
   )

    render() {
        return (
            <ScrollView>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.agents}
                    renderItem={this.renderItem}
                />
            </ScrollView>
        );
    }
}

export default AgentList;