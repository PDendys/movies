import React from 'react';

const Loader: React.FC = () => (
    <div className="text-center my-3">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

export default Loader;
