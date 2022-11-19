import {useQuery} from '@apollo/client';
import {GET_ALL_MOVIES} from '../../../../../api';

export const useMovies = () => {
  const {data, loading, error} = useQuery(GET_ALL_MOVIES);

  return {
    data,
    isLoading: loading,
    error,
  };
};
