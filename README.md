# Food-Fast-Food

[![Build Status](https://travis-ci.org/frostyblok/Food-Fast-Food.svg?branch=develop)](https://travis-ci.org/frostyblok/Food-Fast-Food)

[![Coverage Status](https://coveralls.io/repos/github/frostyblok/Food-Fast-Food/badge.svg?branch=develop)](https://coveralls.io/github/frostyblok/Food-Fast-Food?branch=develop)

[![Maintainability](https://api.codeclimate.com/v1/badges/7e1322334c51ed4a0b47/maintainability)](https://codeclimate.com/github/frostyblok/Food-Fast-Food/maintainability)


Fast-Food-Fast​ is a food delivery service app for a restaurant. It's a platform that allows users order for available food items.

## Table of Contents
1. <a href="#hosted-app">Link to Hosted App</a>
2. <a href="#pivotal-tracker">Link to Pivotal Tracker</a>
3. <a href="#tech-stack-used">Tech Stack Used</a>
4. <a href="#application-features">Application Features</a>
5. <a href="#how-to-use">How To Use</a>
6. <a href="#author">Author</a>


## Link to Hosted App

https://food-fast-food.herokuapp.com

## Link to Pivotal Tracker

https://www.pivotaltracker.com/n/projects/2193723

## Tech Stack Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Html]()
- [Css]()

Food-Fast-Food is hosted on gh-pages and API endpoints on Heroku

- [Github Pages](https://frostyblok.github.io/Food-Fast-Food/UI/index.html)
- [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2193723)
- [API Documentation](https://food-fast-food.herokuapp.com)

## Application Features

* Register a user
* Display available food items to users
* Place an order
* Display history of order
* Add new food items(Admin)
* Update the status of an order
* Cancel an order
* Delete and edit food items


## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/frostyblok/Food-Fast-Food.git

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

## API endpoints
```
POST Request -> localhost:8000/api/v1/auth/signup
POST Request -> localhost:8000/api/v1/auth/login
POST Request -> localhost:8000/api/v1/orders
GET Request ->  localhost:8000/api/v1/orders
GET Request ->  localhost:8000/api/v1/orders/:orderId
GET Request ->  localhost:8000/api/v1/menu
GET Request ->  localhost:8000/api/v1/users/:userId/orders
PUT Request ->  localhost:8000/api/v1/orders/:ordersId
```

## Tests

* To run tests, navigate to the project's root directory
* After installation, run `npm test`

## Author

Oluwakunle Fakorede


---
