import { config } from './config';

// types
import { IResponse } from 'types';

const get = async (title: string): Promise<IResponse> => {
    const res = await fetch(`${config.baseHost}?apikey=${process.env.REACT_APP_API_KEY}&s=${title}`);
    return res.json();
}

const moviesApi = {
    get,
}

export default moviesApi;
