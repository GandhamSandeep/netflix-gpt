import { useSelector } from "react-redux";
import useMovieTrailer from "../custom-hooks/useMovieTrailer";



const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo}`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
