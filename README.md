# JavaScript React with Express Boilerplate

**Please feel free to raise a pull request if you think there's anything else worth adding to this project. Use at own risk. :)**

## 👋 Introduction

This boilerplate code has been created using JavaScript with the yarn registry. The frontend is built in React with Webpack to minify and serve it accordingly with SASS CSS which is then served with an Express backend. Babel, ESLint and Prettier have also been implemented to maintain code cleanliness and parse the code accordingly.

## 🤓 Getting Started

Clone the project to your local device and install the dependencies by running:

#### `yarn`

Please note, you will also need [Node.js v12.18.3](https://nodejs.org/dist/latest-v12.x/) installed on your machine.

## 🧑‍💻 Run application in development mode

In order to get the application running in a local development mode to make changes with hot reloading, you will need to have two separate bash terminals open (in the root of the project folder) and will need to run

#### `yarn web`

to get the react front-end of the application running (`src/client`) with the `webpack-dev-server` and also

#### `yarn server`

to get the express backend server of the application running (`src/server`) of each terminal session respectively.

## 🚀 Run aplication in production mode

In order to run the web application in production mode, you can just run

#### `yarn start`

which will automatically build and serve the frontend and backend simultaneously.

## 🛂 Linting

In order to identify any issues in the codebase, you can run a linting check  

#### `yarn lint`

similarly, to automatically fix any linting issues you can run

#### `yarn lint:fix`

## 🔄 Cleaning Out

From time to time, there may be issues with the `node_modules` that you have installed, you can do a clean install of them by running

#### `yarn refresh`

which will delete all dependencies and reinstall them
