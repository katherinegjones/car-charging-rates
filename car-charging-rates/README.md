# Car Charging Rates

"Car Charging Rates" is a web application that allows prospective electric car buyers to compute an electricity bill using their current electrical rate, home load profile, and projected electrical vehicle usage. They can then compare this cost with other costs involving the same load profiles but different rates.

The app currently only provides two rates, but is extendable via the "API" and its functions. Another component would need to be built to display a form asking users for stats about the new rate(s).

This project was built for a job application to [ZappyRide](https://zappyride.com/) and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

In order to be run locally, the application must be installed along with all of its dependencies:

```
    git clone https://github.com/katherinegjones/car-charging-rates.git
    cd car-charging-rates
    npm install
```
Alternatively, dependencies may be installed via `yarn add`.

This app is also hosted online via [heroku](https://car-charging-rates.herokuapp.com/)

## Usage

### `yarn start` or `npm start` 
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Contributing

Pull requests are welcome. For major changes, please open a pull request to describe what you would like to change.

## License

MIT