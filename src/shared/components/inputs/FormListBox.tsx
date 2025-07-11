import { Controller, useFormContext } from 'react-hook-form';
import ListBox, { type ListBoxItem } from './Dropdown';
import { accessPath } from '@/shared/utils/objectUtils';

interface FormListBoxProps {
  name: string;
  label: string;
  options: ListBoxItem[];
  className?: string;
}

const FormListBox = ({ name, label, options, ...props }: FormListBoxProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  let error = accessPath(errors, name.split("."));
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <ListBox
          options={options}
          label={label}
          className={props.className}
          {...field}
          value={field.value}
          onChange={field.onChange}
          error={error}
        />
      )}
    />
  );
};

export default FormListBox;