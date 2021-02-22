# Real-Estate-Mobile

Mobile app with GeoLocation for searching and getting directions to nearby homes, condos and townhouses. Browsing real estate agents and scheduling appointments.<br><br>
MySQL back-end database<br>
Node (Express + Sequelize) API layer<br>
React front-end client

## Installation

Ensure a device, or emulated Android image is connected (i.e. Android Studio).
Real-Estate-Mobile is built on React Native and therefore assumes you have Node.js installed.

`git clone https://github.com/MihaiGitHub/Real-Estate-Mobile.git` <br>
`cd Real-Estate-Mobile` <br>
`npm install` <br>

Update the following files with the correct Google Maps API key

`src\components\common\Globals.js`<br>
`app.json`

## Running Locally

`expo start`

## Running Tests

`npm test`
