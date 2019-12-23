import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Card, CardItem, Text, Left, Body } from 'native-base';
import GLOBALS from '../common/Globals';
import SCREEN_IMPORT from 'Dimensions';
import { agentFetch } from '../../actions';
import { Spinner } from '../common/Spinner';
import TextMessage from '../common/TextMessage';
import PhoneCall from '../common/PhoneCall';

const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width;

class AgentDetail extends Component {

    componentWillMount = () => {
        this.props.agentFetch(this.props.id);
    }

    render() {
        if(this.props.loadingAgent){
            return <Spinner size="large" />;
        }

        if(this.props.agent.picture){
            image = `${GLOBALS.BASE_URL}/${this.props.agent.picture}`;
        } else {
            image = `${GLOBALS.BASE_URL}/dashboard/img/profile.jpg`;
        }

        return (
            <Container>
                <Content>
                <Card style={styles.card}>
                    <CardItem>
                    <Left>
                        <Body>
                            <Text style={styles.text2}>{this.props.agent.fname} {this.props.agent.lname}</Text>
                            <Text style={styles.text2} note>Certified Agent</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                    <Body style={styles.body}>

                        <Image 
                            source={{ uri: image }} 
                            style={styles.image} />

                        <TextMessage 
                            {...this.props} 
                            btnWidth="49%" 
                            phoneNumber={this.props.agent.phone} />

                        <PhoneCall 
                            {...this.props} 
                            btnWidth="49%" 
                            phoneNumber={this.props.agent.phone} />

                        <Text style={styles.text}>
                            License #: {this.props.agent.license}
                        </Text>

                        <Text style={styles.text}>
                            About {this.props.agent.fname}
                        </Text>

                        <Text style={styles.text2}>
                            {this.props.agent.description}
                        </Text>
                    </Body>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        );
    }
}

const styles = {
    card: {
        flex: 0
    },
    body: {
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    image: {
        height: 300, 
        width: '100%', 
        marginBottom: 5
    },
    text: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 19, 
        paddingBottom: 5, 
        paddingTop: 5, 
        minWidth: '100%', 
        fontWeight: '400'
    },
    text2: {
        fontFamily: 'OpenSans-Regular' 
    }
}

const mapStateToProps = (state) => {
    const { agent, loadingAgent } = state.agents;

    return { agent, loadingAgent };
}

export default connect(mapStateToProps, { agentFetch })(AgentDetail);