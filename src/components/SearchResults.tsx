
//===================== Import Components ==============
import List from "./List";

//==================== Import Types ==========================
import { FullMovieData } from '../types/types';

interface SearchResultsProps {
    setMovie: React.Dispatch<React.SetStateAction<FullMovieData | null>>
}

function SearchResults({ setMovie }: SearchResultsProps) {

    const handleMovieClick = (movie: FullMovieData) => {
        setMovie(movie);
    }

    return (
        <List>
            <li onClick={handleMovieClick}>
                <img
                    src='https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg'
                    alt=''
                />
                <div>
                    <h3>Game of Thrones</h3>
                    <p>📅 2011-2019</p>
                </div>
            </li>
        </List>
    );
}

export default SearchResults;
