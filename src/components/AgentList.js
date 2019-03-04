import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AgentItem from './AgentItem';

class AgentList extends Component {
    state = { agents: [] };

    // Anytime that the component is about to render this lifecycle method will be called
    componentWillMount() {
        // Returns a promise that .then will be called once the http call is complete
        axios.get('https://naszpolskidom.azurewebsites.net/agents-list.php')
            .then(response => this.setState({ agents: response.data.agents }))
            .catch(function (error) {
                console.log(error);
            });
    }

    renderAgents() {
        console.log('render agents', this.state)
       // Map over array of properties and return one item detail component
        return this.state.agents.map(agent => 
            <AgentItem key={agent.id} agentProp={agent} />
        );        
    }

    render() {
        return ( // Everything inside this view is scrollable
            <ScrollView>
                {this.renderAgents()}
            </ScrollView>
        );
    }
}

export default AgentList;