
//===================== Import Components ==============
import List from "./List";

//==================== Import Types ==========================
import { FullMovieData } from '../types/types';

interface SearchResultsProps {
    setMovie: React.Dispatch<React.SetStateAction<FullMovieData | null>>
    searchData?: FullMovieData[]
}

function SearchResults({ setMovie, searchData }: SearchResultsProps) {

    const handleMovieClick = (movie: FullMovieData) => {
        setMovie(movie);
    }

    return (
        <List>
            {
                searchData?.map((movie) => (
                    <li key={movie.imdbID} onClick={() => handleMovieClick(movie)}>
                        <img
                            src={movie.Poster}
                            alt=''
                        />
                        <div>
                            <h3>{movie.Title}</h3>
                            <p>📅 {movie.Year}</p>
                        </div></li>
                ))
            }

        </List>
    );
}

export default SearchResults;
