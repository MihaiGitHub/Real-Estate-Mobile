import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
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
                <Card key={property.pId} style={{ flex: 0 }}>
                    <CardItem cardBody button onPress={() => Actions.propertyView({ id: property.pId })}>
                        <Image 
                            source={{uri: property.pImage == null ? `${GLOBALS.BASE_URL}/dashboard/img/house.gif` : `${GLOBALS.BASE_URL}${property.pImage}`}} 
                            style={{height: 200, width: null, flex: 1}} />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text style={{ fontWeight: '600' }}>${property.price}</Text>
                            <Text>{property.bedroom} beds   {property.bathroom} baths</Text>
                            <Text>{property.location}</Text>
                        </Body>
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