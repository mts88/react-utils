import { DebouncedFunc } from 'lodash';
import { useMemo } from 'react';
import { useDebounce } from '../effects';

export type IUseDebouncedFilter<T> = {
  data: T[];
  searchHandler: DebouncedFunc<(text: string) => void>;
  querySearch: string;
};

/**
 * Filter a list using debounce system to avoid search floor.
 *
 * @param originalData Original list of data
 * @param filterPredicate Predicate to use for filtering
 *
 * @returns filtered data and search handler to bind filter query changes
 */
export const useDebouncedFilter = <T,>(
  originalData: T[],
  filterPredicate: (value: T, searchTerm: string) => boolean,
  debounceTime = 500
): IUseDebouncedFilter<T> => {
  const { querySearch, searchHandler } = useDebounce(debounceTime);

  const data: T[] = useMemo((): T[] => {
    return originalData.filter((d): boolean => filterPredicate(d, querySearch));
  }, [querySearch, originalData]);

  return {
    data,
    searchHandler,
    querySearch
  };
};
