# Delivery App 

A delivery app for any registered user to search for his/her packages that are being handle by Express Delivery AB.


[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![made-with-reactJS](https://img.shields.io/badge/Made%20with-ReactJS-1f425f.svg)](https://www.java.com/en/)

## Brief Summary

A company wants their user Jhon Doe, to find his packages on their website. They want the application written in React with the latest technologies. The app displays the deliveries for the user after he enters his name.

## Revised Design using Material UI

![alt text](https://github.com/Flea00012/SDA8-delivery-app/blob/main/src/artwork/Screenshot%202020-12-07%20at%2002.03.15.png)

## UI and Layout

![alt text](https://github.com/Flea00012/SDA8-delivery-app/blob/main/src/artwork/AppUI.png)


## Initial concept design in Figma

The design is mobile first and below are images of the mobile and the website design as a concept. Note this is different to the final design displayed above due to changes in later development stages.

![alt text](https://github.com/Flea00012/SDA8-delivery-app/blob/main/src/artwork/MobileDesign.png)

![alt text](https://github.com/Flea00012/SDA8-delivery-app/blob/main/src/artwork/DesktopDesign.png)


# Usage

Install all the dependancies with:

```bash
npm install
```

Launch the app from the command line with: 

```bash
npm start
```
The app should launch on port 3000.

There are 3 pages for the application. The Home Page is where the user (Jhon Doe) will enter his/her name and when he/she clicks on the display packages button, he/she gets a list of all the packages. There are two more pages under-development: these are the Login Page, and the SignUp page. These require a backend to be built and will be done in NodeJS or Java Spring.


## Features

The application can show the packages belonging to Jhon Doe along with information that he needs to find the package. These include: the delivery status, the package location, the expected time of delivery and the unique package id (or waybill number).

The other pages for login are presently being built with a backend for Jhon Doe to login and also sign up if he wants to register again.

## React Libraries

The application was made using the core "react" modules and functional components only. However the "react-router-dom" module was also installed to allow routing between the pages of the website. The "react-router-dom" can be installed as follows:

```bash

npm install --save react-router-dom

```

## Class Diagram

![alt text](https://github.com/Flea00012/SDA8-delivery-app/blob/main/src/artwork/React%20Delivery%20App%20(2).png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT license applied to this project. Please view the link for further details.

![alt text](https://github.com/Flea00012/JavaLoggable/blob/master/LICENSE)

## Disclaimer

This application is under construction and the Login and Sign Up features will be delivered in future.
