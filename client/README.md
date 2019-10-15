# React App Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Summary

This boilerplate code is intended to be used to get started with a React App that includes some additional features beyond the Create React App boilerplate, such as Sass, components for a simple page layout, mobile sidebar menu, etc. (work in progress).

## Version

This version includes:
* **[Sass](http://sass-lang.com/guide)**, implemented according to Create React App documentation for [Adding a Sass Stylesheet](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet), with [node-sass node module](https://www.npmjs.com/package/node-sass).
* **[MDC React](https://github.com/material-components/material-components-web-react)** (Google Material Design Components for React) including [Button](https://github.com/material-components/material-components-web-react/tree/rc0.10.0/packages/button), [Top App Bar](https://github.com/material-components/material-components-web-react/tree/rc0.10.0/packages/top-app-bar), [Drawer](https://github.com/material-components/material-components-web-react/tree/rc0.10.0/packages/drawer#usage-with-top-app-bar) and [List](https://github.com/material-components/material-components-web-react/tree/rc0.10.0/packages/list) components, and using [Material Icons](https://material.io/tools/icons/?style=baseline)
* **Collapsible Mobile Sidebar Menu**, using Google Material Design Components, per these guidelines: [Using Drawer with Top Bar App](https://github.com/material-components/material-components-web-react/tree/rc0.10.0/packages/drawer#usage-with-top-app-bar)


## Prerequisites

* nodeJS
* npm

## Installing

Steps for getting a local development env running.

### 1 - Create a local instance of the project

Clone the following 'react-app-boilerplate' Git repo, [using your GitLab **username**](https://gitlab.com/gitlab-org/gitlab-ce/issues/1937):

[https://gitlab.com/code-mentoring/react-app-boilerplate](https://gitlab.com/code-mentoring/react-app-boilerplate). 

```
cd <some local folder where you keep coding projects>
git clone https://username@git@gitlab.com:code-mentoring/react-app-boilerplate.git
```

### 2 - Install dependencies

From terminal, navigate to your local directory and enter the following command, which will install all node modules listed as dependencies in package.json.

```
$ npm install
```

### 3 - Gitignore & ENV files

Create a **.gitignore** file at the root of your directory that includes the following:

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

Create a **.env file** at the root of your directory that includes the following:

```
SASS_PATH=./node_modules
```

### 4 - Push to your remote Git repo

#### a) Create a project on your remote Git site (ex - GitHub or GitLab) OR if a project has already been created, copy the path that you'd use when cloning the project

```
git@gitlab.com:<your-project-path>/react-app-boilerplate.git
```

#### b) - Push your local project to your remote Git repo 

From the parent folder where you cloned 'react-app-boilerplate':

```
cd react-app-boilerplate
git remote rename origin old-origin
git remote add origin git@gitlab.com:<your-project-path>/react-app-boilerplate.git
git add .
git commit -m "Initial commit"
git push -u origin --all
git push -u origin --tags
```

## Running locally

```
cd react-app-boilerplate
npm start
```
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Testing locally

```
npm test
```

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build app for production

```
npm run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Built With

* ReactJS
* Create React App
* Sass


## Git repo

Code is available here: [https://gitlab.com/code-mentoring/react-app-boilerplate](https://gitlab.com/code-mentoring/react-app-boilerplate). 

## Authors

Mobius Innovations LLC
