import React, { Component } from 'react';
import { connect } from 'react-redux';
import { propertiesFiltered } from '../../actions/PropertiesActions';

import { Card } from './Card';
import { CardSection } from './CardSection';
import { SearchInput } from './SearchInput';

class NavBarSearch extends Component {

    onTextChange(text){
        const { properties } = this.props;
        
        let search = text.toLowerCase();
        const results = properties.list.filter(item => {
             return item.location.toLowerCase().indexOf(search) > -1;
        });

        this.props.propertiesFiltered(results);
    }

    render() {
        return (
              <Card>
                <CardSection>
                  
                  <SearchInput
                    onChangeText={this.onTextChange.bind(this)} />
                  
                </CardSection>
              </Card>
        );
     }
}

const mapStateToProps = ({ properties }) => {
    return { properties };
}

export default connect(mapStateToProps, { propertiesFiltered })(NavBarSearch);