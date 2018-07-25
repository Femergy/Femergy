# Femergy

## Dependencies
What you need to run this app:
* `node`
* `npm`
* `mongodb`
* `apidoc` `npm i --g apidoc`

## Install
* `cd client` `npm i`
* `cd server` `npm i`

## Configure
* google-analytics in `client/srs/index.html`
* server address in `client/config/webpack.dev proxy`
* production host, production mongodb, AWS, SendGrid, social credentials in `server/config/config.js`

## Start
Start with local server
* `cd client` `npm run serve`
* `cd server` `npm run start`

## Build
Client build
* `cd client` `npm run prod`

Apidoc build
* `cd server` `npm run docs`

## Information
* `server/public-api/api-temlate` is custom template with custom styles

## For testers

* Simplest way to test all functions:
* `cd server` `npm i`
* `cd client` `npm i`
* `cd client` `npm run prod`
* `cd server` `npm run start`
* Check http://localhost:3000 in browser
