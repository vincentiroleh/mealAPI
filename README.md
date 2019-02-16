# MEAL API

A simple basic RESTFUL CRUD API for a meal booking platform

## Table of Contents

- [Technologies](#technologies)
- [Features Implemented](#features-implemented)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Testing](#testing)
- [Limitations](#limitations)
- [Contributing Guide](#contributing-guide)

## Technologies

- [NodeJS](https://nodejs.org/) - Runtime Environment
- [ExpressJs](https://expressjs.com/) - Web Application Framework

### Supporting Packages

#### Compiler

- [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

## Features Implemented

### Admin

- Admin should be able to create meals
- Admin should be able to get all meals
- Admin should be able to get a particular meal
- Admin should be able to modify a meal
- Admin should be able to delete meals

## Getting Started

### Installation

- Install [NodeJS](https://nodejs.org/) on your computer
- Clone this repository using `git clone https://github.com/vincentiroleh/mealAPI.git`
- Run `npm install` to install all dependencies
- Run `npm start` to start the server
- Navigate to [localhost:6000](http://localhost:6000/) in browser to access the application

### Testing

#### Prerequisites

- [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

- After installing as shown above
- Navigate to [localhost:6000](http://localhost:6000/) in
  [Postman](https://getpostman.com/) to access the application

##### Required Data entry

```
 {
   name: 'String',
   size: 'String',
   price: 'Int'
 }
```

- Entry Point: GET (http://localhost:6000)

- Admin should be able to create meals: POST (http://localhost:6000/api/v1/meals)

- Admin should be able to get all meals: GET (http://localhost:6000/api/v1/meals)

- Admin should be able to get a particular meal: GET (http://localhost:6000/api/v1/meals/id)

  `/id being an id that exits in our dummy database`

- Admin should be able to modify a meal: PUT (http://localhost:6000/api/v1/meals/id)

  `/id being an id that exits in our dummy database`

- Admin should be able to delete meals: DELETE (http://localhost:6000/api/v1/meals/id)

  `/id being an id that exits in our dummy database`

## Limitations

- API doesn't have a UI
- Test not implemented yet

## Contributing Guide

- Fork the repository
- Make your contributions
- Create a pull request against the master branch

## License

&copy; Vincent Iroleh | API Build for learning purpose

Licensed under the [MIT License](https://github.com/vincentiroleh/mealAPI/blob/master/LICENSE)
