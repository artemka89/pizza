import { FieldValue } from '../model/types/types';

type OptionField<T extends string> = { [K in T]: string | number };

export function getProductOptionFieldValues<T extends string>(
  optionsFields: OptionField<T>[],
  fieldKey: T,
  fieldValues?: Record<number, { name: string; isDefault?: boolean }>,
): FieldValue[] {
  if (fieldValues) {
    return Object.entries(fieldValues).map(
      ([fieldValueKey, fieldValue]): FieldValue => {
        const matchingOption = optionsFields.find(
          (option) => option[fieldKey].toString() === fieldValueKey,
        );

        return {
          key: fieldValueKey,
          name: fieldValue.name,
          disabled: !matchingOption,
          isDefault: fieldValue.isDefault,
        };
      },
    );
  } else {
    return optionsFields.map((field, _, array): FieldValue => {
      const isDisabled = array.length < 2;

      return {
        key: field[fieldKey].toString(),
        name: field[fieldKey].toString(),
        disabled: isDisabled,
      };
    });
  }
}
