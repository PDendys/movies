import styled from 'styled-components'

// types
import { Breakpoints } from 'types';

const MovieBlockStyled = styled.div`
    width: 100%;
    padding: 0 15px;
    text-align: left;

    @media (min-width: ${Breakpoints.TABLET}) {
        width: 50%;
    }
    
    @media (min-width: ${Breakpoints.LAPTOP}) {
        width: 33.33%;
    }
    
    .poster {
         max-height: 170px;
         width: auto;
         max-width: 130px;
    }
    
    .title {
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 10px;
    }
    
    .txt {
        font-size: 14px;
        margin: 0 0 3px;
    }
`;

export { MovieBlockStyled };
