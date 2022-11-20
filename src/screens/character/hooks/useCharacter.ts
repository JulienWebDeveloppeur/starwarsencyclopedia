import {ApolloError, useQuery} from '@apollo/client';
import {GET_CHARACTER} from '../../../api';
import {Character} from '../../../models';

export const useCharacter = (
  characterId: string,
): {
  character: Character | undefined;
  isLoading: boolean;
  error: ApolloError | undefined;
} => {
  const {data, loading, error} = useQuery(GET_CHARACTER, {
    variables: {characterId},
  });

  return {
    character: data && data.person,
    isLoading: loading,
    error,
  };
};
