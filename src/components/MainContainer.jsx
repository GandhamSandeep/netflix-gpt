import { useSelector } from 'react-redux';
import VideoTitle from './ViedoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies );

    if(!movies) return;

    const mainMovie = movies[0];

    const { title, overview, id } = mainMovie;

  return (
    <div className='pt-17 bg-black md:pt-0 bg-none'>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer;