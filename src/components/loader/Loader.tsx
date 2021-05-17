import React from 'react';

const Loader: React.FC = () => (
    <div className="w-100 text-center my-5">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

export default Loader;
