import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

// components
import SearchBar from './components/search-bar';
import List from './components/list';

import { MoviesDataProvider } from './components/MoviesData.provider';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <MoviesDataProvider>
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1 mt-4 mb-3">
                            <SearchBar />
                        </div>
                        <div className="col-12">
                            <List />
                        </div>
                    </div>
                </div>
            </div>
        </MoviesDataProvider>
    </QueryClientProvider>
  );
}

export default App;
