import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../utils/movieSlice';


const useTrendingMovies = () => {

    // Fetch Data from the TMDB now playing movies list API and Update to the store
    const dispatch = useDispatch();

    const trendingMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day", API_OPTIONS
    )
    const json = await res.json();
    dispatch(addTrendingMovies(json.results));
    }

    useEffect(() => {
    trendingMovies();
    },[])
}

export default useTrendingMovies;