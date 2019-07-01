import React, { Component } from 'react';
import { Image } from 'react-native';
import axios from 'axios';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import call from 'react-native-phone-call';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GLOBALS from './common/Globals';
import SCREEN_IMPORT from 'Dimensions'
  
const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width;

class AgentDetail extends Component {
    
    state = {
        agent: {},
        imgUrl: `${GLOBALS.BASE_URL}/dashboard/img/profile.jpg`
    }

    componentWillMount = () => {        
        axios.get(`${GLOBALS.BASE_URL}/agents-api.php?data=agentDetail&id=${this.props.id}`)
            .then(response => {
                if(response.data.agent.picture){
                    this.setState({
                        agent: response.data.agent,
                        imgUrl: `${GLOBALS.BASE_URL}/${response.data.agent.picture}`
                    })
                } else {
                    this.setState({
                        agent: response.data.agent,
                    })
                }     
            })
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
        return (
            <Container>
                <Content>
                <Card style={{flex: 0}}>
                    <CardItem>
                    <Left>
                        <Body>
                            <Text>{this.state.agent.fname} {this.state.agent.lname}</Text>
                            <Text note>Certified Agent</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                    <Body>
                        <Image 
                            source={{ uri: this.state.imgUrl }} 
                            style={{ height: 300, width: SCREEN_WIDTH-40, flex: 1, marginBottom: 5 }} />
                        <Button full info onPress={this.call} style={{ marginBottom: 5 }}>
                            <Icon active name="phone-volume" size={25} color="#ffffff" />
                            <Text>CALL AGENT</Text>
                        </Button>
                        <Text>
                            {this.state.agent.description}
                        </Text>
                    </Body>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        );
    }
}

export default AgentDetail;