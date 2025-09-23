import Header from './Header'
import useNowPlayingMovies from '../custom-hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../custom-hooks/usePopularMovies';
import useTopRatedMovies from '../custom-hooks/useTopRatedMovies';
import useUpcomingMovies from '../custom-hooks/useUpcomingMovies';
import useTrendingMovies from '../custom-hooks/useTrendingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  // Custom Hooks to fetch and set the movies data in the store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
      <Header />
      { showGptSearch ? <GptSearch /> : 
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
      {/* {
        - Main Container
          - Video Background
          - Video Title
        Secondary Container
          - Movie List (Horizontal Scroll with Left and Right Arrow)
            - Movie Card (Image, Title, Duration, Rating, Genre)
      } */}
    </div>
  )
}

export default Browse