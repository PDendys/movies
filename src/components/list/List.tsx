import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// components
import Loader from 'components/loader';
import MovieBlock from 'components/movie-block';

// hooks
import { useIsFetching } from 'react-query'
import { useMoviesData } from 'components/MoviesData.provider';

// types
import { IMovie } from 'types';

const List: React.FC = () => {
    const { moviesData } = useMoviesData();
    const isFetching = useIsFetching();

    const { movies, error } = moviesData;

    return (
        <div>
            <h2 className="mb-3">Movies</h2>
            { !movies && error && <p>Nothing was found</p> }
            {
                isFetching
                    ? <Loader />
                    : (
                    <div className="row">
                        { movies && movies.map((movie: IMovie) => <MovieBlock key={uuidv4()} movie={movie} />) }
                    </div>
                )
            }
        </div>
    )
}

export default List;
