# react-firebase-template
This is a React app template, with [Firebase SDK](https://firebase.google.com/docs/firestore/client/libraries) for backend services (i.e. cloud functions, etc), [Tailwind CSS](https://tailwindcss.com/) for Styling, [Vite.js](https://vitejs.dev/) for building, [React Router Dom](https://reactrouter.com/en/main) for routing, [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/) for testing and finally [Firebase's hosting service](https://firebase.google.com/docs/hosting) for deployment.

## Table of Contents
- [react-firebase-template](#react-firebase-template)
  - [Table of Contents](#table-of-contents)
  - [How to use/setup this template in your local device](#how-to-usesetup-this-template-in-your-local-device)
    - [Here are some things you need in your device before proceeding:](#here-are-some-things-you-need-in-your-device-before-proceeding)
    - [How to setup this template in your local device:](#how-to-setup-this-template-in-your-local-device)
  - [How to setup a React app on your own like this without using this template](#how-to-setup-a-react-app-on-your-own-like-this-without-using-this-template)
  - [FAQS (Frequently asked questions)](#faqs-frequently-asked-questions)

## How to use/setup this template in your local device
### Here are some things you need in your device before proceeding:
- Latest version of [Node.js](https://nodejs.org/en)
- Latest version of [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) (optional)

### How to setup this template in your local device:
1. Clone this repository into your local device
2. Navigate to the repository folder (e.g. react-firebase-template)
3. Run `npm install`
4. Create a new firebase project on [firebase](https://firebase.google.com/)
5. Then click the project settings on the project overview on the left navigation bar
6. Then at the "your apps" section create a web app 
7. Name your web app and fill in other details 
> **💡 NOTE**  
*don't enable firebase hosting option while creating the app, which could break this template*
1. Copy your app's configuration
2. Open [`firebase.js`](./src/firebase.js) and paste the configuration in the commented area like:
```javascript
const app = initializeApp({
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
})
```
1.  Run that file using `node src/firebase.js` and after that you can ignore that file
2.  Install firebase CLI tool by `npm install -g firebase-tools`
3.  Login to firebase using firebase CLI tool in your environment by `firebase login`
4.  Be sure to build the app before proceeding to the next step by using `npm run build`
5.  Then run `firebase init` to create the project
    - There will be many questions to answer to create the project and you pretty solve most of them by your own but here are some main ones to know:
        - For selecting firebase services be sure to enable the first hosting option for hosting on firebase while also the second hosting option to deploy the app on every push or pull request merged to the main branch 
            > **💡 NOTE**  
            By enabling the second hosting option for Github actions will ask more questions related to your github repositories, etc but you can answer them if you have decent knowledge about Github
        - For the build directory enter `dist` instead of `public` which is already given because since we use [Vite.js](https://vitejs.dev/) the build directory will be automatically `dist` 
        - For overwriting the index.html in `dist` directory enter `n` (*if you already ran `npm run build` and if not cancel this process and run `npm run build` and then try again*)     
6.  After this you are only one step to deploy the application! Just run `firebase deploy` or `firebase deploy --only hosting` (*if you are in spark plan in firebase*)

    Congratulations! You managed to successfully deploy the application globally!

## How to setup a React app on your own like this without using this template

## FAQS (Frequently asked questions)