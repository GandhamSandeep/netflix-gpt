import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {

  const dispatch = useDispatch();

  const usePopularMovies = useSelector(store=>store.movies.popularMovies)

  // Fetch Trailer Video && Updating the store with the trailer video
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter(
        (video)=> video.type === "Trailer" && video.site === "YouTube");
    
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    if(trailer) {
        dispatch(addTrailerVideo(trailer.key));
    }
  };

  useEffect(() => {
   !usePopularMovies && getMovieVideo();
  }, [movieId]);


  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer;