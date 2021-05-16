import { config } from './config';

const get = async(title: string): Promise<any> => {
    const res = await fetch(`${config.baseHost}?apikey=${process.env.REACT_APP_API_KEY}&s=${title}`);
    return res.json();
}

const moviesApi = {
    get,
}

export default moviesApi;
