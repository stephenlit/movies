//=================== Import hooks =======================
import useFetch from "../components/hooks/useFetch";

//===================== Import Types =====================
import { FullMovieData } from "../types/types";

interface MovieProps {
    movie: FullMovieData;
}

function Movies({ movie }: MovieProps) {
    const formatTextWithParagraphs = (text: string) => {
        // Split the text into sentences
        const sentences = text.split(". ");

        // Group sentences into chunks of 5
        const chunks = [];
        for (let i = 0; i < sentences.length; i += 5) {
            const chunk = sentences.slice(i, i + 5).join(". ") + ".";
            chunks.push(chunk.trim());
        }

        // Return the chunks wrapped in <p> tags
        return chunks.map((chunk, index) => <p key={index}>{chunk}</p>);
    };

    const apiKey = "de4dd7ff";
    const { data, loading, error } = useFetch<FullMovieData>(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
    );

    // Handle loading and error states
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    // Ensure `data` is not null before accessing its properties
    if (!data) {
        return <p>No data available.</p>;
    }

    console.log(data);

    return (
        <>
            <div className='movie-info'>
                <div className='movie-info-stats'>
                    <img
                        src={data.Poster}
                        alt='Poster art for data'
                    />
                    <div>
                        <p>{data.Title}</p>
                        <p>
                            {data.Year} - {data.Runtime} min
                        </p>
                        <p>{data.Genre}</p>
                        <p>⭐ {data.imdbRating}</p>
                    </div>
                </div>
                {formatTextWithParagraphs(data.Plot)}
            </div>
            <div></div>
        </>
    );
}

export default Movies;
