import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieSuggestion = () => {

  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames} = gpt

  if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      {movieNames.map((movieName, index) =><MovieList key={movieName} title={movieNames[0]} movies={movieResults[index]}></MovieList>)}
    </div>
  )
}

export default GptMovieSuggestion;