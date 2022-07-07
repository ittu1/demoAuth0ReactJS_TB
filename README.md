# Auth0 React SDK Sample Application

This is a sample app showing how to integrate Auth0 React SDK into a SPA using the create-react-app.

Remember to install the needed dependencies - use npm install

_This sample was derived from the Auth0 React SDK Quickstart which can be found here https://auth0.com/docs/quickstart/spa/react_

SPA includes:
login button (components)
logout button (components)
Auth0 widget + social sign-in

added extensions used:
userlinking for social profiles 

added rules in Auth0:
email verification for sign-on (forced)
welcome email 

**How to deploy and use: **

1) Have an app created in Auth0 and navigate to Settings
2) Scrolldown to callback URLs Logout URLs, and Allowed Web Origins - replace all URLs with http://localhost:3000
3) Navigate to your project directly and install the Auth0 React SDK using 'npm install @auth0/auth0-react' & Save
4) In your editor, create a new .env file in the directory folder and input these two lines of code: 

REACT_APP_AUTH0_DOMAIN=Client id
REACT_APP_AUTH0_CLIENT_ID=Domain

These two keys are found in the 'settings' section of the Auth0 app 

5) In the Auth0 UI, navigate to Auth Pipeline > Rules and add:
>Add country to user profile
>Force email verification



__________________________________________

#More about create react-app 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

