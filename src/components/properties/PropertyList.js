import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Picker, Icon } from 'native-base';
import { propertiesFetch } from '../../actions';
import { Spinner } from '../common/Spinner';
import PropertyItem from './PropertyItem';

class PropertyList extends Component {

    state = {
        selected: "key3"
    }

    // sortHandler = (value) => {
    //     if(value === 'key1'){
    //         this.props.listFiltered.sort((a, b) => (a.price > b.price) ? 1 : -1)
    //     }
        
    //     if (value === 'key2'){
    //         this.props.listFiltered.sort((a, b) => (a.price < b.price) ? 1 : -1)
    //     }

    //     if (value === 'key3'){
    //         this.props.listFiltered.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1) 
    //     }

    //     this.setState({ selected: value });
    // }

    render() {        
        if(this.props.loading){
            return <Spinner size="large" />;
        }

        return (
            <Container>
                <Content>
                    
                {/*    <Picker
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
                    </Picker> */}

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