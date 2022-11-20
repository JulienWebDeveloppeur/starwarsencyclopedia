import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setLikedCharacter, unsetLikedCharacter} from '../../store/reducers';

export const useUser = () => {
  const {user} = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const getIsLikedCharacter = (id: string): boolean => {
    return !!user.likes.characters.find(c => c === id);
  };

  return {
    user,
    getIsLikedCharacter,
    setLikes: {
      characters: {
        like: (id: string) => {
          if (getIsLikedCharacter(id)) {
            dispatch(unsetLikedCharacter(id));
            return;
          }
          dispatch(setLikedCharacter(id));
        },
      },
    },
  };
};
