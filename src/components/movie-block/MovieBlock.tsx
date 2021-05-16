import React from 'react';

// types
import { IMovie } from 'types';

// styles
import { MovieBlockStyled } from './styles';

type Props = {
    readonly movie: IMovie
}

const MovieBlock: React.FC<Props> = ({ movie }: Props) => {
    const NOT_FOUND = 'N/A';
    const dummyUrl = "https://dummyimage.com/130x175/efefef/000000";
    const { Title, Poster, Year, Type } = movie;
    return (
        <MovieBlockStyled>
            <div className="shadow p-3 mb-3 bg-white rounded d-flex align-items-start">
                <img  className="poster" src={Poster === NOT_FOUND ? dummyUrl : Poster} alt={Title} />
                <div className="ml-2 mt-2">
                    <h4 className="title">{ Title }</h4>
                    <p className="txt"><small><b>Produkcja:</b></small> { Year }</p>
                    <p className="txt"><small><b>Typ:</b></small> { Type }</p>
                </div>
            </div>
        </MovieBlockStyled>
    )
}

export default MovieBlock;
