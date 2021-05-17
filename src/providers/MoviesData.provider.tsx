import React from 'react';

// types
import { IMovie } from 'types';

interface MoviesData {
    movies: IMovie[];
    isEmpty: boolean;
    error: unknown;
}

interface IMoviesDataProvider {
    moviesData: MoviesData;
    setMoviesData: (data: MoviesData) => void;
}

const MoviesDataProviderContext = React.createContext<IMoviesDataProvider>({} as IMoviesDataProvider);

type Props = {
    readonly children: React.ReactNode;
}

const MoviesDataProvider: React.FC<Props> = ({ children }: Props): React.ReactElement => {
    const [moviesData, setMoviesData] = React.useState<MoviesData>({} as MoviesData);

    return (
        <MoviesDataProviderContext.Provider value={{ moviesData, setMoviesData }}>
            { children }
        </MoviesDataProviderContext.Provider>
    );
};

export {
    MoviesDataProvider,
    MoviesDataProviderContext,
};
