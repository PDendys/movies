// Models
export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: 'movie' | 'series';
    Poster: string;
}

export interface IResponse {
    Response: string;
    Search: string;
    totalResults: string;
    Error?: any;
}

export enum QueryKeys {
    MOVIES = 'movies'
}