import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import PropertyList from './components/properties/PropertyList';
import PropertyDetail from './components/properties/PropertyDetail';
import AgentList from './components/agents/AgentList';
import AgentDetail from './components/agents/AgentDetail';
import MyProfile from './components/profile/MyProfile';
import About from './components/profile/About';
import PrivacyPolicy from './components/profile/PrivacyPolicy';
import TermsUse from './components/profile/TermsUse';
import Settings from './components/profile/Settings';
import NavBarSearch from './components/common/NavBarSearch';

const Properties = ({ navigation }) => {
    return (
        <Icon style={{color: navigation.isFocused() ? '#3f51b5' :'#808080'}} name="home" size={30} />
    );
}

const Agents = ({ navigation }) => {
    return (
        <Icon style={{color: navigation.isFocused() ? '#3f51b5' :'#808080'}} name="id-card" size={30} />
    );
}

const Profile = ({ navigation }) => {
    return (
        <Icon style={{color: navigation.isFocused() ? '#3f51b5' :'#808080'}} name="user-tie" size={30} />
    );
}

const RouterComponent = () => {
    return (
        <Router 
            backButtonTintColor="#ffffff"
            backButtonTextStyle={{ color: '#ffffff' }}
            titleStyle={{ color: '#ffffff', fontWeight: '200' }} 
            navigationBarStyle={{ backgroundColor: '#3f51b5' }}>
            <Scene key="root" hideNavBar>{/* Hide extra header due to nested scenes */}
                {/* Tab Container */}
                <Scene key="tabbar" tabs={true}>
                    {/* Tab and it's scenes */}
                    <Scene title="Properties" key="osu" icon={Properties}>
                        <Scene navBar={NavBarSearch} initial key="propertyList" component={PropertyList} title="Property List" />
                        <Scene hideNavBar key="propertyView" component={PropertyDetail} title="View Property" />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene title="Agents" key="um" icon={Agents}>
                        <Scene key="agentList" component={AgentList} title="Agent List" />
                        <Scene key="agentDetail" component={AgentDetail} title="Agent Info" />
                    </Scene>

                    {/* Tab and it's scenes */}
                    <Scene title="My HomeSquare" key="vu" icon={Profile}>
                        <Scene key="profile" component={MyProfile} title="My HomeSquare" />
                        <Scene key="about" component={About} title="About HomeSquare" />
                        <Scene key="privacy" component={PrivacyPolicy} title="Privacy Policy" />
                        <Scene key="terms" component={TermsUse} title="Terms of Use" />
                        <Scene key="settings" component={Settings} title="Settings" />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;