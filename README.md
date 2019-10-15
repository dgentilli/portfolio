# Portfolio Site

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

REF: [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Summary

React site with a ContactForm component that sends an email when the form is submitted, using 'SendGrid-Node API' server-side code.

This API includes an 'api/send' endpoint which accepts a POST request and returns a 'success/error' message to the client communicating whether the email was sent successfully.

## Prerequisites

- nodeJS
- npm
- SendGrid API key (see below): https://app.sendgrid.com/settings/api_keys

### Obtain a SendGrid API Key

Get your unique API key from the [SendGrid Website](https://app.sendgrid.com/login?redirect_to=%2Fsettings%2Fapi_keys)

**IMPORTANT:** Be sure to copy it and save it someplace secure, as you won't be able to access it once it's been assigned.

### Confirm that you have node and npm

Run the following commands in your terminal:

```
npm -v
node -v
```

## Installing

Steps for getting a local development env running.

### Clone or download this repo

1. Create a local folder for the project
2. Clone this project
3. Create a new remote repository
4. Initialize git, add your new remote repository & commit

### Install all node module dependencies (package.json)

This command will read the enclosed package.json and install any dependencies into 'node_modules'.

```
npm install
```

### Setup Your Local Environment Variables

In your terminal, navigate to your app directory (if you're not already there).

Then run the following commands to create a local **.env file** and add it to your **.gitignore** file so that it remains local and secure:

```
echo "SENDGRID_API_KEY='YOUR_API_KEY'" > .env
echo ".env" >> .gitignore
source ./.env
```

Add the following SendGrid variables to the **.env** file:

```
SENDGRID_TO_EMAIL=toemail@domain.com
SENDGRID_FROM_EMAIL=fromemail@domain.com
```

## Running locally

### Start server & React app, using concurrently

```
npm run dev
```

This uses a proxy to run the server on port 8080 and the client on port 3000.

### Open app in browser

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Testing

**NOTE: This will only work once the API is implemented by sending form data to '/api/send' from the client with a POST request**

Once you have your app running locally and ENV variables defined, you can send a test email as follows.

With localhost:8080 up and the server running, fill out the contact form and click 'send.'

You should see results logged in the browser and the Terminal.

Upon receiving a success message, you should receive an email, formatted in HTML sent to the email you defined in the SENDGRID_TO_EMAIL variable, from the email you defined in SENDGRID_FROM_EMAIL.

## Built With

- ReactJS
- Create React App
- Node
- Express
- SendGrid
- React Router

## Git repo

Code is available here: [https://gitlab.com/code-mentoring/fsp-8w/exercises/contact-form-react.git](https://gitlab.com/code-mentoring/fsp-8w/exercises/contact-form-react.git).

## Authors

Mobius Innovations LLC
