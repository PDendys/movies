import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// components
import Loader from 'components/loader';
import ListHeader from 'components/list-header';
import MovieBlock from 'components/movie-block';

// hooks
import { useIsFetching } from 'react-query'
import useMoviesData from 'hooks/useMoviesData';

// types
import { IMovie } from 'types';

const List: React.FC = () => {
    const { moviesData } = useMoviesData();
    const isFetching = useIsFetching();

    const { movies, error } = moviesData;

    const renderList = React.useCallback((): React.ReactElement => {
        if (isFetching) {
            return <Loader />
        }
        if (!movies) {
            return <div className="col-12">{ error ? 'Nothing was found' : 'Type something to start searching' }</div>;
        }

        return (
            <React.Fragment>
                { movies && movies.map((movie: IMovie) => <MovieBlock key={uuidv4()} movie={movie} />) }
            </React.Fragment>
        );
    }, [movies, isFetching, error]);

    return (
        <div className="row mb-3">
            <ListHeader results={movies?.length} />
            { renderList() }
        </div>
    )
}

export default List;
