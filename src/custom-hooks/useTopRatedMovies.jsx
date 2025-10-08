import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/movieSlice';


const useTopRatedMovies = () => {

    // Fetch Data from the TMDB now playing movies list API and Update to the store
    const dispatch = useDispatch();

    const useTopRatedMoviess = useSelector(store=>store.movies.topRatedMovies)

    const topRatedMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS
    )
    const json = await res.json()
    dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
    !useTopRatedMoviess && topRatedMovies();
    },[])
}

export default useTopRatedMovies;