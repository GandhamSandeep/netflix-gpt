import Header from './Header'
import useNowPlayingMovies from '../custom-hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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