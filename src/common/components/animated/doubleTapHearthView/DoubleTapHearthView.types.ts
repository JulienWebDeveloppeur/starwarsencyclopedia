import {ReactNode} from 'react';

export type DoubleTapHearthViewProps = {
  style?: any;
  isLiked: boolean;
  children: ReactNode;
  onLike: () => void;
};
