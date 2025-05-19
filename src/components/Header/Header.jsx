import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleGptSearch } from "../../store/gptSlice";
import { removeUser } from "../../store/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../../utils/constant";
import { auth } from "../../utils/firebase/firebase";
import { changeLanguage } from "../../store/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser());
    });
    navigate("/").catch((error) => {
      console.log(error);
      navigate("/error");
      // An error happened.
    });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const  handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  const buttonshow = useSelector((store) => store.gpt.isGptSearch);

  return (
    <div className="absolute top-0 left-0 flex flex-row justify-between  w-full bg-gradient-to-b from-black z-50">
      <div className="flex">
        {" "}
        <img className="w-52 px-6 py-4" src={NETFLIX_LOGO} alt="Netflix Logo" />
      </div>
      {user && (
        <div className="p-8 flex">
        {buttonshow && ( <select
          className="p-2 m-2 bg-gray-900 text-white"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>)}
          <button
            onClick={handleGptSearch}
            className="bg-purple-500 cursor-pointer hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md shadow-md mx-5 transition duration-300 ease-in-out"
          >
            {!buttonshow ? "GPT Search" : " Back to home"}
          </button>
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
        </div>
      )}
    </div>
  );
};

export default Header;
