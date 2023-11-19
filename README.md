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

`src\components\common\Globals.js`<br>
`app.json`

Update the following file with the Sentry DSN

`src\components\common\Globals.js`

# Running the client

`npx expo start --tunnel`

# Running Tests

`npm test`

# Deploy to Google Playstore

Increment the versionCode and versionName in the following file

`android\app\build.gradle`<br>

Increment the version and versionCode in the following file

`app.json`<br>

Update to the latest target Android version (targetSdkVersion) in the following file

`android\build.gradle`

Build the app binary file

Create project in Expo Go, then

`npm install --global eas-cli && \
 eas init --id <expo_go_project_id>`

`npx eas build`
