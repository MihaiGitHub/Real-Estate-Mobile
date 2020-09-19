import React, { Component, Fragment } from "react";
import { ToastAndroid, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { Card, CardItem, Text, Body } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import GLOBALS from "../common/Globals";

class PropertyItem extends Component {
  renderProperties = () => {
    if (
      Array.isArray(this.props.listFiltered) &&
      this.props.listFiltered.length > 0
    ) {
      return this.props.listFiltered.map((item, index, array) => {
        if (item.PropertyImages.length > 0) {
          const images = item.PropertyImages.map((image) => {
            return `${GLOBALS.TEMP_IMAGE_PATH}${image.url}`;
          });

          array[index]["images"] = images;
        } else {
          array[index]["images"] = [
            `${GLOBALS.TEMP_IMAGE_PATH}/dashboard/img/house.gif`,
          ];
        }

        return (
          <Card key={item.id} style={styles.card}>
            <CardItem cardBody>
              <SliderBox
                images={array[index]["images"]}
                sliderBoxHeight={200}
                onCurrentImagePressed={(index) => {
                  Actions.propertyView({ id: item.id });
                  console.log(`image ${index} pressed`);
                }}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
              />
            </CardItem>
            <CardItem>
              <Body style={styles.body}>
                <Text style={styles.textPrice}>${item.price}</Text>
                <Text style={styles.textBedsBaths}>
                  {item.bedrooms} beds {item.bathrooms} baths
                </Text>
                <Text style={styles.textLocation}>{item.address}</Text>
              </Body>
            </CardItem>
          </Card>
        );
      });
    } else {
      ToastAndroid.show(
        "No properties found near this location!",
        ToastAndroid.LONG
      );
    }
  };

  render() {
    return <Fragment>{this.renderProperties()}</Fragment>;
  }
}

const styles = {
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
    minWidth: "50%",
    fontWeight: "600",
    fontSize: 20,
  },
  textBedsBaths: {
    //   fontFamily: "OpenSans-Regular",
    minWidth: "50%",
    textAlign: "right",
    fontSize: 15,
  },
  textLocation: {
    //  fontFamily: "OpenSans-Regular",
    fontSize: 14,
  },
};

export default PropertyItem;
