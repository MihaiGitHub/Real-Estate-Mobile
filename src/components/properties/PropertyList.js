import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Picker, Icon } from 'native-base';
import GLOBALS from '../common/Globals';
import { propertiesFetch } from '../../actions';
import { Spinner } from '../common/Spinner';
import PropertyItem from './PropertyItem';

class PropertyList extends Component {

    state = {
        selected: "key3"
    }  

    static getDerivedStateFromProps(nextProps, prevState){
        if(Array.isArray(nextProps.listFiltered)){
            if(nextProps.listFiltered.length > 0){
                // Code executes only once, updates image URLs
                // Update listFiltered array on the fly
                nextProps.listFiltered.map(property => {

                    if(property.pImage.length > 0){
                        // Property has images
                        // Update array items on the fly
                        property.pImage.forEach((item, index, arr) => {
                            if(arr[index].charAt(0) === '/')
                                arr[index] = `${GLOBALS.BASE_URL}${item}`;
                        })

                    } else {
                        property.pImage.push(`${GLOBALS.BASE_URL}/dashboard/img/house.gif`)
                    }
                })
            } else {
                nextProps.propertiesFetch()
            }
        }

        return null;
    }

    sortHandler = (value) => {
        if(value === 'key1'){
            this.props.listFiltered.sort((a, b) => (a.price > b.price) ? 1 : -1)
        }
        
        if (value === 'key2'){
            this.props.listFiltered.sort((a, b) => (a.price < b.price) ? 1 : -1)
        }

        if (value === 'key3'){
            this.props.listFiltered.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1) 
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
                            }}
                            selectedValue={this.state.selected}
                            onValueChange={(value) => this.sortHandler(value)}
                        >
                        <Picker.Item label="Price: Low to High" value="key1" />
                        <Picker.Item label="Price: High to Low" value="key2" />
                        <Picker.Item label="Newest listings" value="key3" />
                    </Picker>

                    <PropertyItem {...this.props} />

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