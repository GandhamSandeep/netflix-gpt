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
      <div className='absolute'>
        <img src={NETFLIX_BACKGROUND} alt="Banner-logo" />
      </div> 
      <form onSubmit={(e)=>e.preventDefault()} className='p-16 bg-black/70 absolute w-4/12 my-22 mx-auto right-0 left-0 text-white' action="">
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? 'Sign In': 'Sign Up'}</h1>
        {
          !isSignInForm && (
            <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 bg-gray-800 w-full rounded-lg'/>
          )
        }
        <input ref={email} type="email" placeholder='Email address' className='p-4 my-4 bg-gray-800 w-full rounded-lg'/>
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-800'/>
        <p className='text-red-400 font-bold text-lg'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 text-white rounded-lg w-full' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='text-white py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already a Registered sign In Now'}</p>
      </form>
    </div>
  )
}

export default Login