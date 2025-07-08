import { Controller, useFormContext } from 'react-hook-form';
import TextInput from '../inputs/TextInput';
import type { HTMLAttributes } from 'react';
import ListBox, { type ListBoxItem } from '../inputs/ListBox';

interface FormSectionProps<
  Schema extends Record<string, any>,
  Details extends { [K in keyof Schema]: FormField },
> extends HTMLAttributes<HTMLDivElement> {
  fields: Details;
  namePrefix?: string;
}

export type FormField = TextInputField | ListBoxField;

interface TextInputField extends BaseFormField {
  type: 'text-input';
  label: string;
  defaultValue?: string;
}

interface ListBoxField extends BaseFormField {
  type: 'listbox';
  label: string;
  options: ListBoxItem[];
}

interface BaseFormField {
  key?: string;
  className?: string;
}

const FormSection = <
  Schema extends Record<string, any>,
  Details extends { [K in keyof Schema]: FormField },
>({
  fields,
  ...props
}: FormSectionProps<Schema, Details>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={props.className}>
      {Object.entries(fields).map(([key, value]) => {
        if (value.type === 'text-input') {
          return (
            <Controller
              name={`${props.namePrefix}${key}`}
              control={control}
              defaultValue={value.defaultValue}
              key={value.key ? value.key : key}
              render={({ field }) => (
                <TextInput
                  label={value.label}
                  error={getPath(errors, props.namePrefix + key)?.message?.toString()}
                  className={value.className}
                  {...field}
                />
              )}
            />
          );
        } else if (value.type === 'listbox') {
          return (
            <Controller
              name={`${props.namePrefix}${key}`}
              control={control}
              render={({ field }) => (
                <ListBox
                  options={value.options}
                  label={value.label}
                  className={value.className}
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          );
        }
      })}
    </div>
  );
};

function getPath(obj: any, path: string): any {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

export default FormSection;
