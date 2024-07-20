import { useState } from 'react';
import { useDebounce } from 'react-use';

export function useDebouncedValue(value: string, ms = 500): string {
  const [debouncedValue, setDebouncedValue] = useState('');

  useDebounce(
    () => {
      setDebouncedValue(value);
    },
    ms,
    [value],
  );

  return debouncedValue;
}
