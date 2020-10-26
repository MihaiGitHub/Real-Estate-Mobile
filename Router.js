import React from "react";
import { Scene, Router } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome5";
import PropertyList from "./src/components/properties/PropertyList";
import PropertyDetail from "./src/components/properties/PropertyDetail";
import PropertySearch from "./src/components/properties/PropertySearch";
import PropertyMap from "./src/components/properties/PropertyMap";
import AgentList from "./src/components/agents/AgentList";
import AgentDetail from "./src/components/agents/AgentDetail";
import MyProfile from "./src/components/profile/MyProfile";
import About from "./src/components/profile/About";
import PrivacyPolicy from "./src/components/profile/PrivacyPolicy";
import TermsUse from "./src/components/profile/TermsUse";
import Settings from "./src/components/profile/Settings";
import NavBarSearch from "./src/components/common/NavBarSearch";
import PropertiesMain from "./src/components/properties/index";
import AgentMessage from "./src/components/agents/AgentMessage";

const Properties = ({ navigation }) => {
  return (
    <Icon
      style={{ color: navigation.isFocused() ? "#ffffff" : "#808080" }}
      name="home"
      size={25}
    />
  );
};

const Agents = ({ navigation }) => {
  return (
    <Icon
      style={{ color: navigation.isFocused() ? "#ffffff" : "#808080" }}
      name="id-card"
      size={25}
    />
  );
};

const Profile = ({ navigation }) => {
  return (
    <Icon
      style={{ color: navigation.isFocused() ? "#ffffff" : "#808080" }}
      name="user-tie"
      size={25}
    />
  );
};

const RouterComponent = () => {
  return (
    <Router
      backButtonTintColor="#ffffff"
      backButtonTextStyle={{ color: "#ffffff" }}
      titleStyle={{ color: "#ffffff", fontWeight: "200" }}
      navigationBarStyle={{ backgroundColor: "#3f51b5" }}
    >
      <Scene key="root" hideNavBar>
        {/* Hide extra header due to nested scenes */}
        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs
          activeBackgroundColor="#808080"
          activeTintColor="#ffffff"
        >
          {/* Tab and it's scenes */}
          <Scene title="PROPERTIES" key="properties" icon={Properties}>
            <Scene
              initial
              navBar={NavBarSearch}
              key="propertiesMain"
              component={PropertiesMain}
              title="Properties"
            />
            <Scene
              navBar={NavBarSearch}
              key="propertyList"
              component={PropertyList}
              title="Property List"
            />
            <Scene
              hideNavBar
              key="propertyView"
              component={PropertyDetail}
              title="View Property"
            />
            <Scene
              key="propertySearch"
              component={PropertySearch}
              title="Property Search"
            />
            <Scene
              hideTabBar
              key="propertyMap"
              component={PropertyMap}
              title="Property Map"
            />
            <Scene
              hideTabBar
              key="agentMessage"
              component={AgentMessage}
              title="Message agent"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene title="AGENTS" key="agents" icon={Agents}>
            <Scene key="agentList" component={AgentList} title="Agent List" />
            <Scene
              key="agentDetail"
              component={AgentDetail}
              title="Agent Info"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene title="PROFILE" key="profile" icon={Profile}>
            <Scene key="profile" component={MyProfile} title="Our House" />
            <Scene key="about" component={About} title="About Our House" />
            <Scene
              key="privacy"
              component={PrivacyPolicy}
              title="Privacy Policy"
            />
            <Scene key="terms" component={TermsUse} title="Terms of Use" />
            <Scene key="settings" component={Settings} title="Settings" />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
