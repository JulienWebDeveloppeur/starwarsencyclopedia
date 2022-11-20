import {ApolloError, useQuery} from '@apollo/client';
import {GET_MOVIE} from '../../../api';
import {Movie} from '../../../models';

export const useMovie = (
  movieId: string,
): {
  movie: Movie | undefined;
  isLoading: boolean;
  error: ApolloError | undefined;
} => {
  const {data, loading, error} = useQuery(GET_MOVIE, {
    variables: {movieId},
  });

  return {
    movie: data && data.film,
    isLoading: loading,
    error,
  };
};
