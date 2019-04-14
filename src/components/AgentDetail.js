import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import axios from 'axios';
import { Card, ListItem, Button, Icon, Tile } from 'react-native-elements'
import call from 'react-native-phone-call';
import GLOBALS from './common/Globals';

class AgentDetail extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            agent: {}
        }
    }

    componentWillMount = () => {        
        axios.get(`${GLOBALS.BASE_URL}/agents-api.php?data=agentDetail&id=${this.props.id}`)
            .then(response => this.setState({
                agent: response.data.agent
            }))
            .catch(function (error) { alert('failed');
                console.log(error);
            });
    }

    call = () => {
        //handler to make a call
        const args = {
          number: this.state.agent.phone,
          prompt: false,
        };
        call(args).catch(console.error);
    };

    render() {
        // Show loading while state agent picture not there
        if(this.state.agent.picture){
            var img = `${GLOBALS.BASE_URL}/${this.state.agent.picture}`;
        } else {
            var img = `${GLOBALS.BASE_URL}/dashboard/img/profile.jpg`;
        }

        return (
            <ScrollView>
                <Card
                title={`${this.state.agent.fname} ${this.state.agent.lname}`}
                image={{ uri: img }}
                >
                    <Text style={{ marginBottom: 10, color: '#000000' }}>
                        {this.state.agent.description}
                    </Text>
                    <Button
                        icon={<Icon name='phone' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='CALL AGENT'
                        onPress={this.call}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default AgentDetail;