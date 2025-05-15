import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase";
import {useDispatch, useSelector} from "react-redux"
import {removeUser} from "../../store/userSlice"
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../../utils/constant";
 
const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
      })
      navigate("/")
      .catch((error) => {
        console.log(error);
        navigate("/error")
        // An error happened.
      });
  };
  
  return (
    <div className="absolute top-0 left-0 flex flex-row justify-between  w-full bg-gradient-to-b from-black z-50">
      <div className="flex">
        {" "}
        <img
          className="w-52 px-6 py-4"
          src={NETFLIX_LOGO}
          alt="Netflix Logo"
        />
      </div>
     {user &&  <div className="p-8 flex">
        <img
          className="rounded-sm w-12"
          src={user.photoURL}
          alt="User Photo"
        />

        <button
          onClick={handleSignOut}
          className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md mx-5 transition duration-300 ease-in-out"
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
