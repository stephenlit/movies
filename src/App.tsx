import Box from "./components/Box";
import WatchedMovieInfo from "./components/WatchedMovieInfo";
import Navebar from "./components/Navbar";
import SearchResults from "./components/SearchResults";

function App() {
    return (
        <div className='container'>
            <Navebar />
            <main>
                <Box>
                    <SearchResults />
                </Box>
                <Box>
                    <WatchedMovieInfo />
                </Box>
            </main>
        </div>
    );
}

export default App;
