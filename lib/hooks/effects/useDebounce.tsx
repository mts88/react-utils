import { debounce, DebouncedFunc } from 'lodash';
import { useEffect, useMemo, useState } from 'react';

export type IUseDebounce = {
  querySearch: string;
  searchHandler: DebouncedFunc<(text: string) => void>;
};

/**
 * Prepare search param with debounce time
 *
 * @param debounceTime Timing for debounce
 * @returns Search param and memoized function to handle search
 */
export const useDebounce = (debounceTime = 500): IUseDebounce => {
  const [querySearch, setQuerySearch] = useState('');

  const searchHandler = useMemo((): DebouncedFunc<(text: string) => void> => {
    return debounce(setQuerySearch, debounceTime);
  }, []);

  useEffect((): (() => void) => {
    return (): void => {
      searchHandler.cancel();
    };
  }, []);

  return {
    querySearch,
    searchHandler
  };
};
