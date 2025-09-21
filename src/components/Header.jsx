import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';
import { AVATAR } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const user = useSelector(store => store.user);


  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
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
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img className='w-40' 
        src={NETFLIX_LOGO} alt="Netflix Logo" />
        {
          user && 
          <div className='flex items-center gap-1 text-white font-semibold cursor-pointer'>
             <img className='w-12 h-12 rounded-full' src={user?.photoURL || AVATAR } alt="User Photo" />
            <button className='cursor-pointer font-semibold' onClick={handleSignOut}>Sign Out</button>
          </div>
        }
    </div>
  )
}

export default Header;