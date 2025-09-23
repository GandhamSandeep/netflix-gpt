import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  

  const user = useSelector(store => store.user);


  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  const handleGPTSearch = () => {
    // Togglele GPT Search Modal
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    // Dispatch action to update language in the config slice
    dispatch(changeLanguage(selectedLanguage));
  }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          // ...
          navigate("/browse");
        } else {
          // User is signed out
            dispatch(removeUser());
            navigate("/");
          // ...
        }
      });

      // Unsubscription when the component unmounts
      return () => unsubscribe();

    }, [])



  return (
    <div className="
      absolute px-4 sm:px-8 py-2 
      bg-gradient-to-b from-black 
      z-10 w-full 
      flex justify-between sm:flex-row sm:justify-between"
    >
      {/* Logo */}
      <img 
        className="w-28 sm:w-40 mb-2 sm:mb-0" 
        src={NETFLIX_LOGO} 
        alt="Netflix Logo" 
      />

      {/* User Info */}
      {user && (
        <div className="flex items-center gap-1 sm:gap-4 text-white font-semibold cursor-pointer">
          { showGptSearch &&
            (<select className='bg-red-500 text-white py-2 px-6 font-semibold rounded-md' name="" id="" onChange={handleLanguageChange}>
              {
                SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))
              }
            </select>  )
          }
          <button onClick={handleGPTSearch} className='py-2 px-4 bg-red-500 text-white font-semibold rounded-md cursor-pointer'>
            { showGptSearch ? "Home" : "GPT Search" }
          </button>
          <img 
            className="w-12 h-12 sm:w-12 sm:h-12 rounded-full" 
            src={user?.photoURL || AVATAR} 
            alt="User Photo" 
          />
          <button 
            className="text-sm sm:text-base font-semibold cursor-pointer" 
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header;