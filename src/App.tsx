//===================== Import hooks ==========================
import { useState, useEffect } from "react";
import useDebouncedValue from "./components/hooks/useDebouncedValue";
import useFetch from "./components/hooks/useFetch";

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
    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<FullMovieData[]>([]);

    const debouncedQuery = useDebouncedValue(query, 300);

    const apiKey = "de4dd7ff";
    const { data, loading, error } = useFetch<{ Search: FullMovieData[] }>(
        debouncedQuery ? `https://www.omdbapi.com/?apikey=${apiKey}&page=1&s=${debouncedQuery}` : ""
    );

    useEffect(() => {
        if (!debouncedQuery) {
            setResults([]);
        } else if (data && data.Search) {
            setResults(data.Search);
        }
    }, [debouncedQuery, data]);



    return (

        <div className='container'>
            <Navbar setQuery={setQuery} query={query} />
            <main>
                <Box>
                    {
                        loading && (<p>Loading...</p>)
                    }
                    <SearchResults setMovie={setMovie} searchData={results} />
                </Box>
                <Box>
                    {
                        movie ? (<Movie movie={movie} />) : (<WatchedMovieInfo />)
                    }
                </Box>
            </main>
        </div>
    );
}

export default App;
