import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { useRef } from 'react';
import client from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/GptSlice';

const GptSearchBar = () => {

  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.language);
  const searchText = useRef();


  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=?" + movie +"include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGPTSearchClick = async () => {
    if (!searchText.current?.value) return;

    // Integrate GPT API's
    console.log(searchText.current.value);
    // Make API call to GPT API with searchText.current.value

    const gptQuery = 
    "Act as a movie recommendation engine. Suggest some movies based on the following query: " 
    + searchText.current.value + " " +
    "only give me names of movies in a comma separated format without any other text example: shollay, baahubali, k.g.f, 3 idiots, dangal";
    
    console.log(gptQuery);

    const  gptResults = await client.responses.create({
      model: 'gpt-4o',
      input: gptQuery,
    });
    
    if (!gptResults?.output?.length) {
      // Error Handling
      console.log("GPT Results:", gptResults);
    };  

    const gptMovies = gptResults.output[0]?.content[0]?.text || "No results";
    console.log("Movies:", gptMovies);

    // For each movie, fetch details from TMDB API and show results
    
    const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie))
    
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults, 'tmdb Results ')

    dispatch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbResults}));
  }

  return (
    <div className='pt-[30%] flex justify-center md:pt-[10%]'>
        <form action="" className='w-full border border-white md:grid grid-cols-12 bg-black/70 text-white md:w-1/2 m-6' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9 rounded-xl bg-gray-800' placeholder={lang[langKey]?.gptSearchPlaceholder}/>
            <button className='py-4 px-4 m-4 bg-red-500 text-white font-semibold rounded-md col-span-3 cursor-pointer md:py-2'
            onClick={ handleGPTSearchClick }
            >
                {
                    lang[langKey]?.search
                }
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;