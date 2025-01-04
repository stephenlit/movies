//===================== Import hooks ==========================
import { useState } from "react";

//===================== Import Components =====================
import Box from "./components/Box";
import WatchedMovieInfo from "./components/WatchedMovieInfo";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import Movie from "./components/Movie";

//==================== Import Types ==========================
import { FullMovieData } from "./types/types";

function App() {
    const [movie, setMovie] = useState<FullMovieData | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [results, setResults] = useState<FullMovieData[]>([]);
    return (
        <div className='container'>
            <Navbar />
            <main>
                <Box>
                    <SearchResults setMovie={setMovie} />
                </Box>
                <Box>
                    {
                        movie ? (<Movie />) : (<WatchedMovieInfo />)
                    }
                </Box>
            </main>
        </div>
    );
}

export default App;
