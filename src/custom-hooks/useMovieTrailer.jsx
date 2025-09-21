import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {

  const dispatch = useDispatch();

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
    getMovieVideo();
  }, [movieId]);


  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer;