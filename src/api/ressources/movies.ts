import {gql} from '@apollo/client';

export const allMovies = gql`
  query getAllFilms {
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
