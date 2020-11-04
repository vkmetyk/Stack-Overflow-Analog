## Stack Overflow Analog

The project is an analogue of the stackoverflow site. All information on the pages is taken using the Stack Echange Api. Users are authorized using the OAuth 2.0 library.

## Installation
>**npm install** # install all needed packages  

## Usage
>**npm start** # quick project start  
>**npm run build** # builds the app for production to the build folder  

## Authentication

To be able to authenticate users through a stackoverflow account, you need to do the following:
1) Follow this link - https://stackapps.com/users/login?returnurl=/apps/oauth/register and register a user.
2) https://stackapps.com/apps/oauth/register - register a new application on this page
3) Create a question using the link https://stackapps.com/questions
Your question should contain information about a project according to my example - https://stackapps.com/questions/8739/placeholder-usof-small-copy-of-stack-overflow
4) After creating a question, you need to return to the page - https://stackapps.com/apps/oauth/register and in the Application Website field, provide a link to your question.
5) Place your key and userId where you want in the project:
/public/authorization.js - initAPI function
/src/constants/constants.js - info object