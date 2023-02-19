import React from "react";
import { VStack, Box, Divider, ScrollView } from "native-base";

export function PrivacyPolicy() {
  return (
    <ScrollView>
      <Box border="1" borderRadius="md">
        <VStack space="4" divider={<Divider />}>
          <Box px="4" pt="4">
            Privacy and Cookies Policy
          </Box>
          <Box px="4">
            1. This Privacy Policy informs about the methods of protection of
            personal data of the Website Users (" Users ") located at the
            electronic address www.naszdom.azurewebsites.net , hereinafter
            referred to as the " Website " pursuant to Regulation (EU) 2016/679
            of the European Parliament and of the Council of 27 April 2016 on
            the protection of individuals with regard to the processing of
            personal data and on the free movement of such data, and repealing
            Directive 95/46 / EC (General Data Protection Regulation);
            (hereinafter " GDPR ") and on the general methods of using the
            Website, including the use of cookies.
          </Box>
          <Box px="4">
            2. The administrator of the personal data of the Website Users (
            hereinafter the "Administrator"; "ADO" ) is Palladia Limited
            Liability Company with its registered office in Warsaw (01-494) at
            ul. Obrońców Tobruku 21 B lok. 16, entered into the register of
            entrepreneurs of the National Court Register kept by the District
            Court for the Capital City of Warsaw in Warsaw, 12th Commercial
            Division of the National Court Register under the KRS number:
            0000381211, with the NIP number: 527-265-15-01, REGON: 142869908,
            with the share capital of PLN 6,000.
          </Box>
          <Box px="4">
            3. The content of the Website pages is the property of the Data
            Administrator and is legally protected.
          </Box>
          <Box px="4">
            4. The website is informative. The administrator makes every effort
            to ensure that the presented data is as complete and up-to-date as
            possible.
          </Box>
          <Box px="4">
            5. In order to use the Website, the User should have a computer or
            device with software installed that allows browsing websites and
            access to the Internet. Access to the Website may take place using
            the most popular web browsers.
          </Box>
          <Box px="4">
            6. The Administrator declares that the Website pages are free from
            content that violates the rights of third parties or applicable law,
            in particular from content containing information that causes or
            threatens the privacy or security of any person, contains
            information promoting illegal activities or behavior that is
            offensive, threatening, indecent, defamatory or slanderous, inciting
            racism, persecution for ethnic, cultural or religious reasons,
            promoting or favoring criminal activities, violating the rights of
            third parties, including intellectual property rights or
            constituting another form of infringement of legally protected
            goods.
          </Box>
          <Box px="4">
            7. Providing data is voluntary, however, their absence may prevent
            the use of the Website.
          </Box>
          <Box px="4" pb="4">
            Century Homes
          </Box>
        </VStack>
      </Box>
    </ScrollView>
  );
}
