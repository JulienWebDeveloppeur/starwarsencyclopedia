import {gql} from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
  query getAllCharacters {
    allPeople {
      people {
        id
        name
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($characterId: ID!) {
    person(id: $characterId) {
      id
      name
      birthYear
      height
      mass
      homeworld {
        id
        name
      }
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;
