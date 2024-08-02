import { useEffect } from 'react';

import { useSelectedItems } from '@/entities/products';

import { mapOptionsToParams } from '../lib/map-options-to-params';

export function useMappedOptionToParam<T extends string>(
  options: { [K in T]: number | string }[],
  key: T,
  initialOptionParam?: string,
  params?: Record<number | string, string>,
) {
  const [setOption] = useSelectedItems((state) => [state.setOption]);

  useEffect(() => {
    if (initialOptionParam) {
      const option = options.find(
        (option) => option[key] === initialOptionParam,
      );
      option && setOption(option);
      setOptionParam(initialOptionParam);
    } else {
      setOption(options[0]);
      setOptionParam(options[0][key]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setOptionParam = (param: string | number) => {
    const selectedOption = options.find(
      (option) => option[key].toString() === param,
    );
    if (selectedOption) {
      setOption(selectedOption);
    }
  };

  const mappedOptions = mapOptionsToParams(options, key, params);

  return { mappedOptions, setOptionParam };
}
