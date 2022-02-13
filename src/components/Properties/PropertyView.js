import React, { useEffect } from "react";
import { Button, View, Linking } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { findPropertyById } from "../../actions/PropertiesActions";

export function PropertyView({ navigation }) {
  const reduxStore = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findPropertyById());
  }, []);

  console.log("Redux store ", reduxStore);
  const initiateUber = (message, number) => {
    let url =
      "uber://?action=setPickup&pickup[latitude]=37.775818&pickup[longitude]=-122.418028&pickup[nickname]=UberHQ&pickup[formatted_address]=1455%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103&dropoff[latitude]=37.802374&dropoff[longitude]=-122.405818&dropoff[nickname]=Coit%20Tower&dropoff[formatted_address]=1%20Telegraph%20Hill%20Blvd%2C%20San%20Francisco%2C%20CA%2094133&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d&link_text=View%20team%20roster&partner_deeplink=partner%3A%2F%2Fteam%2F9383";

    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  return (
    <View>
      <Button
        title="uber"
        onPress={() =>
          initiateUber("I want to inquire about a property", "dummy")
        }
        style={{ flex: 0.35 }}
        //  leftIcon={<FontAwesome name="whatsapp" size={24} color="black" />}
      >
        WhatsApp
      </Button>
    </View>
  );
}
