import React, { useRef, useState } from "react";
import { checkValidData } from "../../utils/checkValidation";
import Header from "../Header/Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmitBtn = async (e) => {
    e.preventDefault();

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign Up logic
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        const user = userCredential.user;

        await updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://avatars.githubusercontent.com/u/186927267?v=4",
        });

        await auth.currentUser.reload(); // Refresh the user's profile

        const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;

        dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));
        navigate("/body");
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      // Sign In logic
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        const user = userCredential.user;
        const { uid, email: userEmail, displayName, photoURL } = user;

        dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));
        navigate("/body");
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Header */}
      <Header />

      {/* Centered Form */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmitBtn}
          className="bg-black bg-opacity-75 p-10 rounded-md w-full max-w-md space-y-6"
        >
          <h2 className="text-3xl font-bold text-white text-center">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <p className="text-red-600 text-sm mt-1 font-medium">
            {errorMessage}
          </p>

          <button
            type="submit"
            className="w-full bg-red-600 cursor-pointer hover:bg-red-700 transition-colors p-3 rounded-md font-semibold"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <div className="text-center text-sm text-gray-400">
            <a href="https://help.netflix.com/en" className="hover:underline">
              Need help?
            </a>
          </div>

          <p
            className="text-gray-400 text-sm text-center"
            onClick={toggleSignUp}
          >
            {isSignIn ? "New to Netflix?" : "Already a User?"}{" "}
            <span className="text-white cursor-pointer hover:underline">
              {isSignIn ? "Sign Up Now" : "Sign In Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
