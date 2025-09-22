import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    if (!movies || !movies.length) return null;
  return (
    <div className='px-12'>
        <h1 className='text-3xl text-white font-bold py-4'>{title}</h1>
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