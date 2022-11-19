import {useEffect, useState} from 'react';
import {orderBy} from 'lodash';

type useOrderArrayParams = {
  arr: any[];
  order: 'asc' | 'desc';
  // property key to order by
  propertyKey: string;
};

export const useOrderArray = ({
  arr,
  order,
  propertyKey,
}: useOrderArrayParams) => {
  const [orderedArray, setOrderedArray] = useState<any[]>([]);

  useEffect(() => {
    setOrderedArray(orderBy(arr, propertyKey, order));
  }, [order, arr, propertyKey]);

  return {
    orderedArray,
  };
};
