import React from "react";
import { VStack, Box, Divider, ScrollView } from "native-base";

export function TermsUse() {
  return (
    <ScrollView>
      <Box border="1" borderRadius="md">
        <VStack space="4" divider={<Divider />}>
          <Box px="4" pt="4">
            Terms of Use
          </Box>
          <Box px="4">
            1. The use of the app takes place using the ICT system. To use the
            Website, it is necessary to have a device with access to the
            Internet and a web browser.
          </Box>
          <Box px="4">
            2. Before registering, the User or the Partner is required to read
            the Regulations, Privacy Policy and Cookies and accept them.
          </Box>
          <Box px="4">
            3. The content of the app is the property of the Service Provider
            and is legally protected.
          </Box>
          <Box px="4">
            4. The Service Provider provides the Service by enabling the
            publication of advertisements on the app's website.
          </Box>
          <Box px="4" pb="4">
            Century Homes
          </Box>
        </VStack>
      </Box>
    </ScrollView>
  );
}
