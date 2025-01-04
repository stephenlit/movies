export type MovieData = {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
};

export type FullMovieData = MovieData & {
    runtime: number;
    imdbRating: number;
    userRating: number;
}
