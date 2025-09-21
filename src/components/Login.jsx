import { useRef, useState } from 'react'
import Header from './Header'
import checkValidateData  from '../utils/validate.jsx'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.jsx'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.jsx';
import { NETFLIX_BACKGROUND, USER_AVATAR } from '../utils/constants.jsx';


const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const toggleSignInForm = () => {
    // Logic to toggle to sign-up form
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form Data
    const validationResult = checkValidateData(
      isSignInForm ? "Valid Name" : name.current.value, // Skip name validation for sign-in
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationResult.message);

    // If validationResult has an error message, stop
    if (!validationResult.valid) {
      setErrorMessage(validationResult.message);
      return;
    }

    setErrorMessage(null); // clear previous errors


    if(!isSignInForm){
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value,
        password.current.value
      )
      .then((userCredential) => { 
        const user = userCredential.user;
        updateProfile(user, {
        displayName: name.current.value, 
        photoURL: USER_AVATAR 
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          // ...
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
        // ..
      });
    }else{
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
  }


  return (
    <div>
  <Header />
  <div className="absolute inset-0">
    <img
      src={NETFLIX_BACKGROUND}
      alt="Banner-logo"
      className="w-full h-full object-cover"
    />
  </div>

  <form
    onSubmit={(e) => e.preventDefault()}
    className="
      absolute 
      bg-black/70 text-white
      w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12
      p-6 sm:p-10 md:p-12 lg:p-16
      mx-auto left-0 right-0
      my-30 sm:my-16 md:my-20
      rounded-lg
    "
    action=""
  >
    <h1 className="font-bold text-2xl sm:text-3xl py-4">
      {isSignInForm ? "Sign In" : "Sign Up"}
    </h1>

    {!isSignInForm && (
      <input
        ref={name}
        type="text"
        placeholder="Full Name"
        className="p-3 sm:p-4 my-3 sm:my-4 bg-gray-800 w-full rounded-lg"
      />
    )}

    <input
      ref={email}
      type="email"
      placeholder="Email address"
      className="p-3 sm:p-4 my-3 sm:my-4 bg-gray-800 w-full rounded-lg"
    />

    <input
      ref={password}
      type="password"
      placeholder="Password"
      className="p-3 sm:p-4 my-3 sm:my-4 bg-gray-800 w-full rounded-lg"
    />

    <p className="text-red-400 font-bold text-sm sm:text-lg">{errorMessage}</p>

    <button
      className="p-3 sm:p-4 my-4 sm:my-6 bg-red-700 text-white rounded-lg w-full"
      onClick={handleButtonClick}
    >
      {isSignInForm ? "Sign In" : "Sign Up"}
    </button>

    <p
      className="text-white text-sm sm:text-base py-2 sm:py-4 cursor-pointer"
      onClick={toggleSignInForm}
    >
      {isSignInForm
        ? "New to Netflix? Sign Up Now"
        : "Already a Registered? Sign In Now"}
    </p>
  </form>
</div>

  )
}

export default Login