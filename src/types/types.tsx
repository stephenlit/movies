export type MovieData = {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
};

export type FullMovieData = MovieData & {
    Runtime: number;
    imdbRating: number;
    userRating: number;
    Genre: string;
    Plot: string;
}
