import { NETFLIX_BACKGROUND } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


const GptSearch = () => {
  return (
    <div>
        <div className="absolute inset-0 -z-10">
            <img
              src={NETFLIX_BACKGROUND}
              alt="Banner-logo"
              className="w-full h-full object-cover"
            />
          </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch;