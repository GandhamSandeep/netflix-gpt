import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { MOVIES_CATEGORIES } from '../utils/constants';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  return (
    <div className='bg-[#141414] pb-20'>
      <div className='-mt-42 z-20 relative'>
        { MOVIES_CATEGORIES.map(({ title, key }) => (
          <MovieList key={key} title={title} movies={movies?.[key]} /> ))
        }
      </div>
    </div>
  )
}

export default SecondaryContainer;