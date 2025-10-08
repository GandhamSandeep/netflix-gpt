import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    if (!movies || !movies.length) return null;
  return (
    <div className='px-6 pr-0 md:px-12 md:pr-0'>
        <h1 className='text-lg md:text-3xl text-white font-bold py-4'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            <div className='flex'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}  
            </div>
        </div>
    </div>
  )
}

export default MovieList