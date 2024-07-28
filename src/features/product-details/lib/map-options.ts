interface Option {
  param: string;
  name: string;
  disabled: boolean;
}

export function mapOptions<T extends string>(
  options: { [K in T]: number | string }[],
  params: Record<number | string, string>,
  key: T,
): Option[] {
  return Object.entries(params).map(([paramKey, paramName]): Option => {
    const matchingOption = options.find(
      (option) => option[key].toString() === paramKey,
    );

    const isDisabled = matchingOption === undefined;

    const name = isDisabled ? paramName : params[matchingOption[key]];

    return {
      param: paramKey,
      name,
      disabled: isDisabled,
    };
  });
}
