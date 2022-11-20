import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setLikedCharacter} from '../../store/reducers';

export const useUser = () => {
  const {user} = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  return {
    user,
    setLikes: {
      characters: {
        like: (id: string) => {
          dispatch(setLikedCharacter(id));
        },
      },
    },
  };
};
