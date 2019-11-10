import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Image, View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Picker, Icon } from 'native-base';
import GLOBALS from '../common/Globals';
import { propertiesFetch } from '../../actions';
import { Spinner } from '../common/Spinner';

class PropertyList extends Component {

    state = {
        selected: "key3"
    }

    componentWillMount() {
        this.props.propertiesFetch();
    }

    renderProperties(){
        return this.props.listFiltered.map(property => {
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

    sortHandler = (value) => {
        if(value === 'key1'){
            this.props.listFiltered.sort((a, b) => (a.price > b.price) ? 1 : -1)
        }
        
        if (value === 'key2'){
            this.props.listFiltered.sort((a, b) => (a.price < b.price) ? 1 : -1) 
        }        

        this.setState({ selected: value });
    }

    render() {        
        if(this.props.loading){
            return <Spinner size="large" />;
        }

        return (
            <Container>
                <Content>
                    
                    <Picker
                    mode="dropdown"
                    placeholder="Sort Listings"
                    iosIcon={<Icon name="arrow-down" />}
                        style={{ 
                        width: undefined,
                        height: 30,
                        color: '#3f51b5',
                        }}
                        selectedValue={this.state.selected}
                        onValueChange={(value) => this.sortHandler(value)}
                    >
                    <Picker.Item label="Price (Low to High)" value="key1" />
                    <Picker.Item label="Price (High to Low)" value="key2" />
                    <Picker.Item label="Newest Listings" value="key3" />
                    </Picker>
                    
                    {this.renderProperties()}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { listFiltered, loading } = state.properties;

    return { listFiltered, loading };
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, { propertiesFetch })(PropertyList);