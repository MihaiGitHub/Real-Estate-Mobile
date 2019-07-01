import React from 'react';
import { Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import AgentList from './components/AgentList';
import AgentDetail from './components/AgentDetail';
import MyProfile from './components/MyProfile';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsUse from './components/TermsUse';

const properties = (<Icon name="home" size={30} color="#808080" />)
const agents = (<Icon name="id-card" size={30} color="#808080" />)
const profile = (<Icon name="user-tie" size={30} color="#808080" />)

const Properties = ({ selected, title }) => {
    return (
      <Text style={{color: selected ? 'red' :'black'}}>{properties}</Text>
    );
}

const Agents = ({ selected, title }) => {
    return (
        <Text style={{color: selected ? 'red' :'black'}}>{agents}</Text>
    );
}

const Profile = ({ selected, title }) => {
    return (
        <Text style={{color: selected ? 'red' :'black'}}>{profile}</Text>
    );
}

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>{/* Hide extra header due to nested scenes */}
                {/* Tab Container */}
                <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
                    {/* Tab and it's scenes */}
                    <Scene key="osu" title="Properties" icon={Properties}>
                        <Scene initial key="propertyList" component={PropertyList} title="Property List" />
                        <Scene key="propertyView" component={PropertyDetail} title="View Property" />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="um" title="Agents" icon={Agents}>
                        <Scene key="agentList" component={AgentList} title="Agent List" />
                        <Scene key="agentDetail" component={AgentDetail} title="Agent Detail" />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene key="vu" title="My HomeSquare" icon={Profile}>
                        <Scene key="profile" component={MyProfile} title="My HomeSquare" />
                        <Scene key="about" component={About} title="About" />
                        <Scene key="privacy" component={PrivacyPolicy} title="Privacy Policy" />
                        <Scene key="terms" component={TermsUse} title="Terms of Use" />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;