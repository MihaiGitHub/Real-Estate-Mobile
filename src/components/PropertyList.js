import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GLOBALS from './common/Globals';
import { propertiesFetch } from '../actions';
import { Spinner } from './common/Spinner';

class PropertyList extends Component {

    componentWillMount() {
        this.props.propertiesFetch();
    }

    renderProperties(){
        return this.props.list.map(property => {
            return (
                <Card key={property.pId}>
                    <CardItem>
                    <Left>
                        <Body>
                            <Text>${property.price}</Text>
                            <Text note>{property.location}</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem cardBody button onPress={() => Actions.propertyView({ id: property.pId })}>
                        <Image 
                            source={{uri: property.pImage == null ? `${GLOBALS.BASE_URL}/dashboard/img/house.gif` : `${GLOBALS.BASE_URL}${property.pImage}`}} 
                            style={{height: 200, width: null, flex: 1}} />
                    </CardItem>
                    <CardItem>
                    <Left>
                        <Button transparent>
                        <Icon active name="bed" size={20} />
                        <Text style={{ color: '#808080' }}>{property.bedroom} Beds</Text>
                        </Button>
                    </Left>
                    <Body>
 
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon active name="bath" size={20} />
                            <Text style={{ color: '#808080' }}>{property.bathroom} Baths</Text>
                        </Button>
                    </Right>
                    </CardItem>
                </Card>
            );
        });
    }

    render() {        
        if(this.props.loading){
            return <Spinner size="large" />;
        }

        return (
            <Container>
                <Content>
                    {this.renderProperties()}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { list, loading } = state.properties;

    return { list, loading };
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, { propertiesFetch })(PropertyList);