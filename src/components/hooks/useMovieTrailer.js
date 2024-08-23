import { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { API_OPTIONS } from '../../utils/constants';
import { addTrailerVideos } from '../../utils/moviesSlices';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
     const getMovieVideo = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        if (!json) return null;
        const filterData = json.results.filter(
          (movies) => movies.type === "Trailer"
        );
        if (!filterData) return null;
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideos(trailer))
      };
    
      useEffect(() => {
        getMovieVideo();
      },[]);
} 
      
    

export default useMovieTrailer