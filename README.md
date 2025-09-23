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
- Fetch Movies from TMDB
# Bugs
    - SingUp up User displayName and Profile Update
    - If the User is not logged in redirect /browse to login page and vice-versa
- Unsubscribe to the onAuthStateChanged callback.
- Add HardCoded valaues to the constants file
# TMDB 
- Need to signUp in the TMDB
- Mail Verfication
- Edit Profile
- Click API and Need to fill all the details for token
- API Access Token will get and API Key will get
- Get Data from the TMDB now playing movies list API
<!-- 
- Adding Movie Data to the Store(movieSlice)
- Creating Own Custome Hook (useNowPlayingMovies)
- Building the Browse Page
- Building the Video Title
- Building the Video Background
- Creating the Custome hook for Video Background
- Building the Video Background(background position) 
-->
- Custom Hook for Now Playing videos
- Create movieSlice
- Update Store with movies Data
- Planning for MainContainer & Secondary Container
- Fetch Data Trailer Video
- Updates Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to main container look awesome
- Build Secondary Component
    - Creating the Movie Suggestion List
        - MovieList component should be rendered here.
        - MovieList - Popular Movies
        - MovieList - Top Rated Movies
        - MovieList - Upcoming Movies
        - MoviewList - Now Playing Movies
        - MoviewsList - Trending Movies
        - MoviewsList - Horror Movies
    - Showing the populae movie list on the page
- Build Movie List
- Build Movie Card
- Image TMDB CDN URL 
- Made the browse page amazing with tailwind css
- Custom hooks for popular, toprated, trending, upcoming
- GPT Search Page
- GPT Search Bar
- (Bonus)Building Multilanguage Feature in the app
- Integrate GPT API's




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