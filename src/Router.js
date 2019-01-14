import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import PropertyList from './components/PropertyList';
import Property from './components/Property';
//import PropertyDetail from './src/components/PropertyDetail';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>{/* Hide extra header due to nested scenes */}
                 
                <Scene key="main">
                    <Scene 
                        initial
                  //      rightTitle="Add" 
                  //      onRight={() => Actions.employeeCreate()} 
                        key="propertyList" 
                        component={PropertyList} 
                        title="Property List" />

                    <Scene key="propertyView" component={Property} title="View Property" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;