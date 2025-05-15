import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase";
import {useDispatch, useSelector} from "react-redux"
import {removeUser} from "../../store/userSlice"
import { useNavigate } from "react-router-dom";
 
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
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>
     {user &&  <div className="p-8 flex">
        <img
          className="rounded-sm w-12"
          src={user.photoURL}
          alt=""
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
