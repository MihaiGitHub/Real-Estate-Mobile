import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import axios from 'axios';
import { ListItem } from 'react-native-elements'

class AgentList extends Component {
    state = { agents: [] };

    componentWillMount() {
        // Returns a promise that .then will be called once the http call is complete
        axios.get('https://naszpolskidom.azurewebsites.net/agents-list.php')
            .then(response => this.setState({ agents: response.data.agents }))
            .catch(function (error) {
                console.log(error);
            });
    }

   keyExtractor = (item, index) => index.toString()

   renderItem = ({ item }) => (
     <ListItem
       title={`${item.fname} ${item.lname}`}
       subtitle={"Certified Agent"}
       leftAvatar={{ source: { uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" } }}
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