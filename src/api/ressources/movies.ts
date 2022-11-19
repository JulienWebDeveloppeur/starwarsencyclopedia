import {gql} from '@apollo/client';

export const GET_ALL_MOVIES = gql`
  query getAllMovies {
    allFilms {
      films {
        title
        releaseDate
        id
        openingCrawl
      }
    }
  }
`;
