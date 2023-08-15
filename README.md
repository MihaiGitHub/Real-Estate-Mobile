# Real-Estate-Mobile (Century Homes)

Mobile application allowing users to search for properties and agents across the United States. View property Zestimates and get directions to properties. Contact agents through WhatsApp, text or phone call and calculate mortgage payments. Integrated with Zillow and Uber.

MySQL backend database<br>
Node (Express + Sequelize) API layer<br>
React Native (React + Redux) frontend client<br>

# Installation

Ensure a device, or emulated Android image is connected (i.e. Android Studio). Real-Estate-Mobile is built on React Native and therefore assumes you have Node.js installed.

`git clone https://github.com/MihaiGitHub/Real-Estate-Mobile.git`<BR>
`cd Real-Estate-Mobile`<br>
`npm install`

Update the following files with the correct Google Maps API key

`android\app\src\main\AndroidManifest.xml`<br>
`src\components\common\Globals.js`<br>
`app.json`

# Running the client

`expo start --tunnel`

# Running Tests

`npm test`

# Deploy to Google Playstore

`eas build`
