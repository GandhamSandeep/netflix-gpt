import Draggable from "react-draggable";
import { useRef, useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"; // your existing API options

const TrailerPopup = ({ movie, onClose }) => {
  const nodeRef = useRef(null);
  const [trailers, setTrailers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrailer = trailers[currentIndex];

  useEffect(() => {
    if (!movie?.id) return;

    const fetchTrailers = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
          API_OPTIONS
        );
        const data = await res.json();
        const ytTrailers = data.results.filter(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );
        setTrailers(ytTrailers);
        setCurrentIndex(0); // reset index when movie changes
      } catch (err) {
        console.error("Failed to fetch trailers:", err);
      }
    };

    fetchTrailers();
  }, [movie.id]);

  const nextTrailer = () => {
    setCurrentIndex((prev) => (prev + 1) % trailers.length);
  };

  const prevTrailer = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? trailers.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <Draggable nodeRef={nodeRef} handle=".handle">
        <div
          ref={nodeRef}
          className="bg-black w-[90%] md:w-[700px] rounded-lg shadow-lg"
        >
          <div className="handle cursor-move flex justify-between items-center p-3 text-white bg-zinc-900 rounded-t-lg">
            <span>{movie.title}</span>
            <button onClick={onClose} className="text-xl cursor-pointer">
              ✕
            </button>
          </div>

          <div className="p-4">
            {trailers.length > 0 ? (
                <>
                <iframe
                    className="w-full h-[300px] md:h-[400px]"
                    src={`https://www.youtube.com/embed/${currentTrailer.key}?autoplay=1&mute=1&loop=1&playlist=${currentTrailer.key}`}
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />

                {trailers.length > 1 && (
                    <div className="flex justify-between mt-2 text-white">
                        <button onClick={prevTrailer} className="cursor-pointer">Previous</button>
                        <span>
                            {currentIndex + 1} / {trailers.length}
                        </span>
                        <button onClick={nextTrailer} className="cursor-pointer">Next</button>
                    </div>
                )}
                </>
            ) : (
                // Shimmer placeholder
                <div className="w-full h-[300px] md:h-[350px] bg-zinc-700 rounded-lg overflow-hidden relative animate-pulse">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 opacity-50"></div>
                </div>
            )}
            </div>
        </div>
      </Draggable>
    </div>
  );
};

export default TrailerPopup;
