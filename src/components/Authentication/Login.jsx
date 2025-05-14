import React,{useState} from 'react'
import Header from '../Header/Header'

const Login = () => {
const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignUp = () =>{
    setIsSignIn(!isSignIn)
  }
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
      <div className="relative opacity-85 z-10 flex justify-center items-center h-full">
        <form className="bg-black bg-opacity-75 p-10 rounded-md w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-white text-center">{isSignIn ? "Sign In" : "Sign Up"}</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="w-full bg-red-600 cursor-pointer hover:bg-red-700 transition-colors p-3 rounded-md font-semibold"
          >
           {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="text-center text-sm text-gray-400">
            <a href="https://help.netflix.com/en" className="hover:underline ">Need help?</a>
          </div>
          <p className="text-gray-400 text-sm text-center" onClick={toggleSignUp}>
          {isSignIn ? "New to Netflix ?" : "Already a User ?"} <a href="#" className="text-white cursor-pointer hover:underline">{isSignIn ? "Sign In Now..." : "Sign Up Now..."}</a>.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
