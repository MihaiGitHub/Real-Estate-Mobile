import React, { useRef, useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Default Props
const defaults = {
  height: 200,
  width: Dimensions.get("window").width,
  delay: 5000,
};

// // Default Image Item
// const Item = ({ title, url, height, width, onPress }) => {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.8}
//       style={[styles.imageContainer, { height: height, width: width }]}
//       onPress={onPress}
//     >
//       <Image source={{ uri: url }} style={[styles.image, { height: height }]} />
//       <View style={styles.titleContainer}>
//         <Text style={styles.title}>{title}</Text>
//         {/* {title && <Text style={styles.title}>{title} </Text>}
//             {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>} */}
//       </View>
//     </TouchableOpacity>
//   );
// };

// // Default On Press Action
// const handlePress = (item) => {
//   console.log("Pressed", item);

//   navigation.navigate("Property Info", {
//     item,
//   });
// };

// Carousal Component
export default function ImageCarousel({
  data,
  height = defaults.height,
  width = defaults.width,
  delay = defaults.delay,
  // onPress = handlePress,
  // ItemElement = Item,
  openGallery,
  type,
}) {
  const [selectedIndex, setselectedIndex] = useState(0);
  const scrollView = useRef();
  const navigation = useNavigation();

  // Script which will only executed when component initilizes
  useEffect(() => {
    // console.log("DATA ", data);
    const fn = setInterval(() => {
      setselectedIndex((oldCount) =>
        oldCount === data.length - 1 ? 0 : oldCount + 1
      );
    }, delay);
    return () => {
      clearInterval(fn);
    };
  }, []);

  // Script will executed every time selectedIndex updates
  useEffect(() => {
    scrollView.current.scrollTo({
      animated: true,
      x: width * selectedIndex,
      y: 0,
    });
  }, [selectedIndex]);

  const setIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    setselectedIndex(Math.floor(contentOffset.x / viewSize.width));
  };

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={setIndex}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.carousalContainer}>
          {data.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.imageContainer, { height: height, width: width }]}
              // onPress={() =>
              //   openGallery === false
              //     ? navigation.navigate("Property Info", {
              //         id: item.id,
              //       })
              //     : openGallery()
              // }
              onPress={() => {
                if (openGallery === false) {
                  // navigation.navigate("Property Info", {
                  //   id: item.id,
                  //   //   type,
                  // });
                  if (type === "USRealEstate") {
                    navigation.navigate("Property Info US Real Estate", {
                      id: item.id,
                    });
                  } else {
                    navigation.navigate("Property Info", {
                      id: item.id,
                    });
                  }
                } else {
                  openGallery();
                }
              }}
              key={index}
            >
              <Image
                source={{ uri: item.url }}
                style={[styles.image, { height: height }]}
              />
              {openGallery === false && (
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carousalContainer: {
    flexDirection: "row",
    width: "100%",
  },
  imageContainer: { backgroundColor: "yellow" },
  item: {
    backgroundColor: "rgba(91, 91, 91, 0.3)",
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingLeft: 10,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
  },
  image: {
    width: defaults.width,
    height: defaults.height,
  },
});
