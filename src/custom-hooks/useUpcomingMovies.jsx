import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice';


const useUpcomingMovies = () => {

    // Fetch Data from the TMDB now playing movies list API and Update to the store
    const dispatch = useDispatch();

    const upComingMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS
    )
    const json = await res.json()
    dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
    upComingMovies();
    },[])
}

export default useUpcomingMovies;