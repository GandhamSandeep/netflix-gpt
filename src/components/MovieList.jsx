import MovieCard from './MovieCard';
import { useState } from "react";
import TrailerPopup from "./TrailerPopup";

const MovieList = ({title, movies}) => {

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (!movies || !movies.length) return null;

  return (
    <div className='px-6 pr-0 md:px-12 md:pr-0'>
        <h1 className='text-lg md:text-3xl text-white font-bold py-4'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            <div className='flex cursor-pointer'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} 
                    onClick={() => setSelectedMovie(movie)}
                    />
                ))}  
            </div>
        </div>
        <div>
            {selectedMovie && (
                <TrailerPopup
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
                />
            )}
        </div>
    </div>
  )
}

export default MovieList