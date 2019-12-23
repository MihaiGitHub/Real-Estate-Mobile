import React, { Component } from 'react';
import { connect } from 'react-redux';
import { propertiesFiltered } from '../../actions/PropertiesActions';
import { Header, Item, Input, Icon } from 'native-base';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

class NavBarSearch extends Component {
    render() {
        return (
          <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input 
                  placeholder={this.props.properties.searchTerm}
                  onFocus={() => Actions.propertySearch()} />
                <Icon2 
                  name="sliders"
                  size={25}
                  style={styles.icon2} />
              </Item>
          </Header>
        );
     }
}

const styles = {
    icon2: {
      paddingRight: 10
    }
}

const mapStateToProps = ({ properties }) => {
    return { properties };
}

export default connect(mapStateToProps, { propertiesFiltered })(NavBarSearch);