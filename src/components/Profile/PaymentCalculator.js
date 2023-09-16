import React, { useState, useEffect } from "react";
import { VStack, Box, Divider, ScrollView } from "native-base";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { VictoryPie, VictoryLabel, VictoryTheme } from "victory-native";
import { Slider } from "@miblanchard/react-native-slider";
import "intl";
import "intl/locale-data/jsonp/en"; // or any other locale you need

export function PaymentCalculator() {
  const size = 400;

  const [price, setPrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(5);

  const dollarUSLocale = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const downPaymentTotal = (price * downPayment) / 100;

  const finalPrice = price - downPaymentTotal;

  const monthlyInterestRateTotal = (finalPrice * interestRate) / 100 / 12;

  const monthlyPrincipalTotal = Math.round(finalPrice / 360);

  const monthlyTaxesTotal = (monthlyInterestRateTotal + finalPrice / 360) / 12;

  const totalMonthlyPayment =
    monthlyInterestRateTotal + monthlyPrincipalTotal + monthlyTaxesTotal;

  // flexbox react native
  // https://reactnative.dev/docs/flexbox?language=javascript

  //color scales: "grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue"
  return (
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        {/* <Box px="4" pt="4">
          Payment Calculator
        </Box> */}
        <Box
          px="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <VictoryPie
              //    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
              colorScale="qualitative"
              standalone={false}
              width={400}
              height={400}
              data={[
                {
                  x: `Principal 
($${Math.round(monthlyPrincipalTotal)})`,
                  y: monthlyPrincipalTotal,
                },
                {
                  x: `Interest
($${Math.round(monthlyInterestRateTotal)})`,
                  y: monthlyInterestRateTotal,
                },
                {
                  x: `Taxes
($${Math.round(monthlyTaxesTotal)})`,
                  y: monthlyTaxesTotal,
                },
              ]}
              innerRadius={100}
              labelRadius={110}
              style={{ labels: { fontSize: 20, fill: "black" } }}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: 20, fontWeight: 700 }}
              x={200}
              y={200}
              text={`${dollarUSLocale.format(totalMonthlyPayment)} / mo`}
            />
          </Svg>
        </Box>
        <Box
          px="6"
          style={{
            display: "flex",
            // flexDirection: "row",
            // justifyContent: "flex-start",
            // alignItems: "flex-start",
          }}
        >
          <Text>Price: {dollarUSLocale.format(price)}</Text>
          <Slider
            minimumValue={30000}
            maximumValue={1000000}
            step={10000}
            trackClickable={true}
            onValueChange={(price) => setPrice(price)}
            value={price}
          />
          <Text>
            Down Payment: {Math.round(downPayment)}% (
            {dollarUSLocale.format(downPaymentTotal)})
          </Text>
          <Slider
            minimumValue={0}
            maximumValue={40}
            step={0.1}
            trackClickable={true}
            onValueChange={(dPayment) => setDownPayment(dPayment)}
            value={downPayment}
          />
          <Text>Interest Rate: {Math.round(interestRate * 100) / 100}%</Text>
          <Slider
            minimumValue={0}
            maximumValue={12}
            step={0.1}
            trackClickable={true}
            onValueChange={(iRate) => setInterestRate(iRate)}
            value={interestRate}
          />
        </Box>
        <Box px="4" pb="4">
          Century Homes
        </Box>
      </VStack>
    </Box>
  );
}
