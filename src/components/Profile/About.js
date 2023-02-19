import React from "react";
import { VStack, Box, Divider, ScrollView } from "native-base";

export function About() {
  return (
    <ScrollView>
      <Box border="1" borderRadius="md">
        <VStack space="4" divider={<Divider />}>
          <Box px="4" pt="4">
            Title: Century Homes Real Estate
          </Box>
          <Box px="4">
            Century Homes helps you buy, sell or rent apartments and houses. Our
            real estate agents make the entire process easy from beginning to
            end
          </Box>
          <Box px="4" pb="4">
            Version: 2.0
          </Box>
        </VStack>
      </Box>
    </ScrollView>
  );
}
