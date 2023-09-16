import React, { useState, useEffect } from "react";
import { VStack, Box, Divider, ScrollView } from "native-base";
import { View, StyleSheet, Text } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { VictoryPie, VictoryLabel, VictoryTheme } from "victory-native";
import { Slider } from "@miblanchard/react-native-slider";
import "intl";
import "intl/locale-data/jsonp/en"; // or any other locale you need

export function AffordabilityCalculator() {
  const size = 400;

  const [income, setIncome] = useState(150000);
  //  const [downPayment, setDownPayment] = useState(20000);
  const [monthlyDebts, setMonthlyDebts] = useState(600);

  const dollarUSLocale = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  let incomeTaxes = 0;

  if (income < 11000) {
    incomeTaxes = (income * 0.1) / 12;
  } else if (income >= 11000 && income < 44725) {
    incomeTaxes = (income * 0.12) / 12;
  } else if (income >= 44725 && income < 95375) {
    incomeTaxes = (income * 0.22) / 12;
  } else if (income >= 95375 && income < 182100) {
    incomeTaxes = (income * 0.24) / 12;
  } else if (income >= 182100 && income < 231250) {
    incomeTaxes = (income * 0.32) / 12;
  } else if (income >= 231250 && income < 578125) {
    incomeTaxes = (income * 0.35) / 12;
  } else {
    incomeTaxes = (income * 0.37) / 12;
  }

  const monthlyIncome = income / 12;

  const monthlyNet = monthlyIncome - incomeTaxes - monthlyDebts;

  const allowedLoanPayment = monthlyNet * 0.2;

  const remainingCash = monthlyNet - allowedLoanPayment;

  let youcanafford = allowedLoanPayment * 360;
  // youcanafford = youcanafford + downPayment;

  return (
    <ScrollView>
      <Box border="1" borderRadius="md">
        <VStack space="4" divider={<Divider />}>
          {/* <Box px="4" pt="4">
            Affordability Calculator
          </Box> */}
          <Box px="3">
            <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              <VictoryPie
                //   colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                colorScale="qualitative"
                standalone={false}
                width={400}
                height={400}
                data={[
                  {
                    x: `Other debts
($${Math.round(monthlyDebts)})`,
                    y: monthlyDebts,
                  },
                  {
                    x: `Monthly Payment 
($${Math.round(allowedLoanPayment)})`,
                    y: allowedLoanPayment,
                  },
                  {
                    x: `Remaining
($${Math.round(remainingCash)})`,
                    y: remainingCash,
                  },
                  {
                    x: `Income Taxes
($${Math.round(incomeTaxes)})`,
                    y: incomeTaxes,
                  },
                ]}
                innerRadius={100}
                labelRadius={110}
                style={{ labels: { fontSize: 16, fill: "black" } }}
              />
              <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20, fontWeight: 700 }}
                x={200}
                y={200}
                text={`You can afford
${dollarUSLocale.format(youcanafford)}`}
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
            <Text>Income: {dollarUSLocale.format(income)}</Text>

            <Slider
              minimumValue={30000}
              maximumValue={500000}
              step={10000}
              trackClickable={true}
              onValueChange={(i) => setIncome(i)}
              value={income}
            />

            {/* <Text>Down Payment: {dollarUSLocale.format(downPayment)}</Text>

            <Slider
              minimumValue={0}
              maximumValue={50000}
              step={500}
              trackClickable={true}
              onValueChange={(dPayment) => setDownPayment(dPayment)}
              value={downPayment}
            /> */}

            <Text>
              Monthly debts: {dollarUSLocale.format(monthlyDebts)} / month
            </Text>

            <Slider
              minimumValue={0}
              maximumValue={20000}
              step={100}
              trackClickable={true}
              onValueChange={(mDebt) => setMonthlyDebts(mDebt)}
              value={monthlyDebts}
            />
          </Box>
          <Box px="4" pb="4">
            Century Homes
          </Box>
        </VStack>
      </Box>
    </ScrollView>
  );
}
