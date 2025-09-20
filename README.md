# Netlix GPT

- Created React App usin with Vite
- Configured Tailwind Css
- Header
- Routing of App
- Login Form
- SignUp Form
- Form Validation 
- what is useRef hook
- firebase setup
- deploying our app to production
- Create Sign up user account
- Sign in authentication using with the firebase 
- Created Redux store RTK with User Slice
    - npm i -D @reduxjs/toolkit
    - npm i react-redux
- Implemented Signout Functionality
    - Added profile icon and updated the profile icon from store while login




# Feature
- Login/Sign Up
    - Sign In / Sign Up Form
    - redirect to Browse Page
- Browse ( After Authentication )
 - Header
 - Main Movie
    - Trailer in the Background
    - Title & Description
       - MoviewList * N 
- Netflix GPT
 - Search Bar
 - Movie Suggestion





 # libraries
 - formik.org library for specially for forms (validations)




# FireBase Setup :
- firebase console need to login with actual gmail
- create a project with spark no cost
- Terminal
    - npm install firebase
    - firebase login
    - firebase init // after follow below steps
        - select - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
        - Use an existing project
        - netflixgpt-30b02 (NetflixGPT) // select our project
        - What do you want to use as your public directory? Type build
        - Configure as a single-page app (rewrite all urls to /index.html)? Select No
        - Set up automatic builds and deploys with GitHub? Select No

    - After all the steps
    - npm run build build will create in the project
    - firebase deploy