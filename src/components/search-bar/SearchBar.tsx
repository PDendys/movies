import React from 'react';

// hooks
import { useQuery } from 'react-query';
import useDebounce from 'hooks/useDebounce';
import { useMoviesData } from 'providers/MoviesData.provider';

// utils
import moviesApi from 'utils/api';

// types
import { IResponse, QueryKeys } from 'types';

const SearchBar: React.FC = () => {
    const DELAY_TIME = 350;
    const [movieName, setMovieName] = React.useState<string>('');

    const debouncedSearchQuery = useDebounce(movieName, DELAY_TIME);
    useQuery<IResponse | boolean>(
        [QueryKeys.MOVIES, debouncedSearchQuery], () => getMovies(movieName),
        {
            refetchOnMount: false,
            onSuccess: (res) => onDataFetchSuccess(res),
        }
    );

    const { moviesData, setMoviesData } = useMoviesData();

    const getMovies = async (name: string): Promise<IResponse | boolean> => {
        if (name) {
            return await moviesApi.get(movieName);
        }
        return false;
    }

    const onDataFetchSuccess = (res: any): void => {
        const { Search, Error } = res || {};
        setMoviesData({
            ...moviesData,
            movies: Search,
            error: Error,
            isEmpty: !!res,
        })
    }

    return (
        <div className="text-left">
            <div className="form-group">
                <input
                    type="text"
                    id="movieName"
                    className="form-control"
                    placeholder="Enter movie name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMovieName(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchBar;
