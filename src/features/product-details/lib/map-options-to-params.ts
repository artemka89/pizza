interface Param {
  param: string;
  name: string;
  disabled: boolean;
}

type Option<T extends string> = { [K in T]: string | number };

export function mapOptionsToParams<T extends string>(
  options: Option<T>[],
  key: T,
  params?: Record<string | number, string>,
): Param[] {
  if (params) {
    return Object.entries(params).map(([paramKey, paramName]): Param => {
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
  } else {
    return options.map((option, _, array): Param => {
      const isDisabled = array.length < 2;

      return {
        param: option[key].toString(),
        name: option[key].toString(),
        disabled: isDisabled,
      };
    });
  }
}
