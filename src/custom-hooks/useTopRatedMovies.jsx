import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {

    // Fetch Data from the TMDB now playing movies list API and Update to the store
    const dispatch = useDispatch();

    const topRatedMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS
    )
    const json = await res.json()
    dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
    topRatedMovies();
    },[])
}

export default useTopRatedMovies;