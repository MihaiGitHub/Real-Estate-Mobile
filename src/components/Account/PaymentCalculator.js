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

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const downPaymentTotal = (price * downPayment) / 100;

  const finalPrice = price - downPaymentTotal;

  const monthlyInterestRateTotal = (finalPrice * interestRate) / 100 / 12;

  const monthlyPrincipalTotal = finalPrice / 360;

  const monthlyTaxesTotal = (monthlyInterestRateTotal + finalPrice / 360) / 12;

  const totalMonthlyPayment = dollarUSLocale.format(
    Math.round(
      monthlyInterestRateTotal + monthlyPrincipalTotal + monthlyTaxesTotal
    )
  );

  return (
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          Payment Calculator
        </Box>
        <Box px="4">
          <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <VictoryPie
              colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
              standalone={false}
              width={400}
              height={400}
              data={[
                { x: "Principal", y: monthlyPrincipalTotal },
                { x: "Interest", y: monthlyInterestRateTotal },
                { x: "Taxes", y: monthlyTaxesTotal },
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
              text={`${totalMonthlyPayment} / mo`}
            />
          </Svg>
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

          <Text>Interest Rate: {Math.round(interestRate)}%</Text>

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
