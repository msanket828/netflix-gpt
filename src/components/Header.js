import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../util/firebase';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  console.log(user);
  const handleSignout=()=> {
    signOut(auth).then(() => {
      // Sign-out successful
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <header className='py-5 px-5 flex justify-between items-center'>
      <a href='' className='w-40 inline-block'>
        <img  src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
      </a>
      <div className='flex items-center'>
        <img src={user?.photoURL} alt="user icon" className='w-8 h-8'/>
        <button onClick={handleSignout}>sign out</button>
      </div>
    </header>
  )
}

export default Header