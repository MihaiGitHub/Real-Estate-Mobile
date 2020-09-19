import React, { useEffect } from "react";
import { connect } from "react-redux";
import { InteractionManager, View } from "react-native";
import getDirections from "react-native-google-maps-directions";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Body,
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SliderBox } from "react-native-image-slider-box";
import { Actions } from "react-native-router-flux";
import GLOBALS from "../common/Globals";
import { propertyFetch } from "../../actions";
import { Spinner } from "../common/Spinner";

const PropertyDetail = (props) => {
  const init = () => {
    props.propertyFetch(props.id);
  };

  useEffect(() => {
    init();
  }, []);

  const handleFeatures = () => {
    if (props.property.features) {
      let features = props.property.features.split(",");

      return features.map((feature) => {
        return (
          <Text key={feature} style={styles.textFeatures}>
            -{feature}
          </Text>
        );
      });
    }
  };

  const handleGetDirections = () => {
    const data = {
      destination: {
        latitude: parseFloat(props.property.lat, 10),
        longitude: parseFloat(props.property.lng, 10),
      },
      params: [
        {
          key: "travelmode",
          value: "driving", // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate", // this instantly initializes navigation using the given travel mode
        },
      ],
    };

    getDirections(data);
  };

  if (props.loadingProperty) {
    return <Spinner size="large" />;
  }

  const {
    lat,
    lng,
    images,
    price,
    bedroom,
    bathroom,
    location,
    description,
  } = props.property;

  if (images.length === 0) {
    images = [`${GLOBALS.BASE_URL}/dashboard/img/house.gif`];
  }

  return (
    <Container>
      <Content>
        <View style={styles.view}>
          <SliderBox
            images={images}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            onCurrentImagePressed={(index) =>
              console.log(`image ${index} pressed`)
            }
          />
          <Button
            small
            primary
            style={styles.mapBtn}
            onPress={() =>
              Actions.propertyMap({ latitude: lat, longitude: lng })
            }
          >
            <Icon
              active
              name="map"
              size={25}
              color="#ffffff"
              style={styles.icon}
            />
            <Text>VIEW MAP</Text>
          </Button>
          <Button
            small
            primary
            onPress={handleGetDirections}
            style={styles.directionsBtn}
          >
            <Icon
              active
              name="directions"
              size={25}
              color="#ffffff"
              style={styles.icon}
            />
            <Text>DIRECTIONS</Text>
          </Button>
        </View>
        <Card style={styles.card}>
          <CardItem>
            <Body style={styles.body}>
              <Text style={styles.textPrice}>${price}</Text>
              <Text style={styles.textBedBath}>
                {bedroom} Beds {bathroom} Baths
              </Text>
              <Text style={styles.textLocation}>{location}</Text>
              <Text style={styles.textFeaturesTitle}>Features</Text>
              {handleFeatures()}
              <Text style={styles.textDescriptionTitle}>About this home</Text>
              <Text style={styles.textDescription}>{description}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const styles = {
  view: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  sliderBox: {
    minWidth: "100%",
    paddingBottom: 5,
  },
  mapBtn: {
    marginRight: 2,
    width: "49%",
    borderRadius: 3,
  },
  icon: {
    paddingLeft: 15,
  },
  directionsBtn: {
    width: "49%",
    borderRadius: 3,
  },
  card: {
    flex: 0,
  },
  body: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textPrice: {
    //   fontFamily: "OpenSans-Regular",
    fontSize: 26,
    fontWeight: "500",
    minWidth: "59%",
  },
  textBedBath: {
    //   fontFamily: "OpenSans-Regular",
    marginTop: 5,
    minWidth: "41%",
    textAlign: "right",
  },
  textLocation: {
    //   fontFamily: "OpenSans-Regular",
    marginBottom: 5,
    minWidth: "100%",
  },
  textFeaturesTitle: {
    //   fontFamily: "OpenSans-Regular",
    fontSize: 19,
    paddingBottom: 5,
    minWidth: "100%",
    fontWeight: "400",
  },
  textDescriptionTitle: {
    //   fontFamily: "OpenSans-Regular",
    fontSize: 19,
    paddingBottom: 5,
    paddingTop: 5,
    minWidth: "100%",
    fontWeight: "400",
  },
  textDescription: {
    //    fontFamily: "OpenSans-Regular",
    minWidth: "100%",
  },
  textFeatures: {
    //   fontFamily: "OpenSans-Regular",
    paddingBottom: 5,
    minWidth: "50%",
    textAlign: "left",
  },
};

const mapStateToProps = (state) => {
  const { listFiltered, propertyId, loadingProperty } = state.properties;
  const property = listFiltered.find((x) => x.id === propertyId);

  return { property, loadingProperty };
};

// Anytime state updates, connect helper will rerun mapStateToProps to make it available as props in component
export default connect(mapStateToProps, { propertyFetch })(PropertyDetail);
