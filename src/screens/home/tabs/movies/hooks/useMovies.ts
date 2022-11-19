import {useQuery} from '@apollo/client';
import {allMovies} from '../../../../../api';

export const useMovies = () => {
  const {data, loading, error} = useQuery(allMovies);

  return {
    data,
    isLoading: loading,
    error,
  };
};
