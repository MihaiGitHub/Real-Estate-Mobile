import React, { Component } from 'react';
import { connect } from 'react-redux';
import { propertiesFiltered } from '../../actions/PropertiesActions';
import { Header, Item, Input, Icon } from 'native-base';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

//import { PermissionsAndroid } from 'react-native';
//import Geolocation from 'react-native-geolocation-service';

class NavBarSearch extends Component {
    render() {
        return (
          <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input 
                  placeholder={this.props.properties.searchTerm}
                  onFocus={ async () => {
                /*    
                    try {

                      const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                          'title': 'Example App',
                          'message': 'Example App access to your location '
                        }
                      )

                      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        console.log("You can use the location")
                       // alert("You can use the location");

                        //  if (hasLocationPermission) {
                              Geolocation.getCurrentPosition(
                                  (position) => {
                                      console.log(position);
                                  },
                                  (error) => {
                                      // See error code charts below.
                                      console.log(error.code, error.message);
                                  },
                                  { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                              );
                       //   }
                      } else {
                        console.log("location permission denied")
                        alert("Location permission denied");
                      }
                      

                    } catch (err) {
                      console.warn(err)
                    }
*/
                    Actions.propertySearch()
                  }} />
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