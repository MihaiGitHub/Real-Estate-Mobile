import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AgentItem = ({ agentProp }) => {
    const { id, fname, lname, picture } = agentProp;
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

    if(picture){
        var img = picture;
    } else {
        var img = "https://naszpolskidom.azurewebsites.net/dashboard/img/profile.jpg";
    }

    return (
        <Card>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{fname}</Text>
                    <Text>{lname}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: img }} />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: { // Image will not render without a height and width
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null // Image will stretch full width
    }
};

export default AgentItem;