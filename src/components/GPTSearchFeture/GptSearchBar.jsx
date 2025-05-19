import React from 'react'
import {useSelector} from 'react-redux'
import lang from '../../utils/languageConstants'

const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang)
  return (
    <div className='mt-[10%] text-center opacity-90'>
      <form action="">
        <input
          className='bg-black  w-1/2 h-12 rounded-2xl border-white  mx-auto font-bold text-lg px-5 text-white placeholder-white'
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className='bg-red-500 cursor-pointer hover:bg-blue-700 text-white text-xl font-semibold py-2 px-4  rounded-md shadow-md mx-5 transition duration-300 ease-in-out'
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
