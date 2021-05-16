import React from 'react';

// types
import { IMovie } from 'types';

interface InitialState {
    movies: IMovie[];
    error: any;
    isEmpty: boolean;
}

const initState: InitialState | any = {
    movies: [],
    error: null,
    isEmpty: true,
};

const MoviesDataProviderContext = React.createContext(initState);

function useMoviesData() {
    const context = React.useContext(MoviesDataProviderContext);

    if (context === undefined) {
        throw new Error('Must be used within MoviesDataProvider.');
    }

    return context;
}

type Props = {
    children: React.ReactNode;
}

const MoviesDataProvider: React.FC<Props> = ({ children }: Props): React.ReactElement => {
    const [moviesData, setMoviesData] = React.useState<InitialState>(initState);

    return (
        <MoviesDataProviderContext.Provider value={{ moviesData, setMoviesData }}>
            { children }
        </MoviesDataProviderContext.Provider>
    );
};

export {
    MoviesDataProvider,
    useMoviesData,
    MoviesDataProviderContext
};
