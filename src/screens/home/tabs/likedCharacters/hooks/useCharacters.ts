import {ApolloError, useQuery} from '@apollo/client';
import {GET_ALL_CHARACTERS} from '../../../../../api';
import {CharacterListItem} from '../../../../../models';

export const useCharacters = (): {
  charactersList: CharacterListItem[] | undefined;
  isLoading: boolean;
  error: ApolloError | undefined;
} => {
  const {data, loading, error} = useQuery(GET_ALL_CHARACTERS);

  return {
    charactersList: data && data.allPeople && data.allPeople.people,
    isLoading: loading,
    error,
  };
};
