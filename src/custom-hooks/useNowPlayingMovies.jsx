import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPlayingMovies = () => {

    // Fetch Data from the TMDB now playing movies list API and Update to the store
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS
    )
    const json = await res.json()
    dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
    getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;