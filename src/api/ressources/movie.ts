import {gql} from '@apollo/client';

export const GET_MOVIE = gql`
  query GetMovie($movieId: ID!) {
    film(id: $movieId) {
      title
      releaseDate
      id
      openingCrawl
      speciesConnection {
        totalCount
      }
      planetConnection {
        totalCount
      }
      vehicleConnection {
        totalCount
      }
      characterConnection {
        characters {
          id
          name
        }
      }
    }
  }
`;
