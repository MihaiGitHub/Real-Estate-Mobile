import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements'
import { Scene, Router, Actions } from 'react-native-router-flux';
import GLOBALS from './common/Globals';
import { agentsFetch } from '../actions';
import { Spinner } from './common/Spinner';

class AgentList extends Component {

    componentWillMount() {
        this.props.agentsFetch();
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
        title={`${item.fname} ${item.lname}`}
        onPress={() => Actions.agentDetail({ id: item.id})}
        subtitle={"Certified Agent"}
        leftAvatar={{
            source: {
                uri: (item.picture == '') ? `${GLOBALS.BASE_URL}/dashboard/img/profile.jpg` : `${GLOBALS.BASE_URL}/${item.picture}`
            }
        }}
        />
    )

    renderAgents(){
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={this.props.list}
                renderItem={this.renderItem}
            />
        );
    }

    render() {
        if(this.props.loading){
            return <Spinner size="large" />;
        }

        return (
            <ScrollView>
                {this.renderAgents()}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    const { list, loading } = state.agents;

    return { list, loading };
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, { agentsFetch })(AgentList);