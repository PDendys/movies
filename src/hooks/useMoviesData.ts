import React from 'react';

import { MoviesDataProviderContext } from 'providers/MoviesData.provider';

const useMoviesData = () => {
    const context = React.useContext(MoviesDataProviderContext);

    if (context === undefined) {
        throw new Error('Must be used within MoviesDataProvider.');
    }

    return context;
}

export default useMoviesData;
