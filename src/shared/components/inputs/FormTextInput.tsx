import { Controller, useFormContext } from 'react-hook-form';
import TextInput from './TextInput';
import { accessPath } from '@/shared/utils/objectUtils';

interface FormTextInputProps {
  name: string;
  label: string;
  defaultValue?: string;
  className?: string;
}

const FormTextInput = ({ name, label, ...props }: FormTextInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  let error = accessPath(errors, name.split("."));
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={props.defaultValue}
      render={({ field }) => (
        <TextInput
          label={label}
          error={error?.message?.toString()}
          className={props.className}
          {...field}
        />
      )}
    />
  );
};

export default FormTextInput;
