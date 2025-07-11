import { Controller, useFormContext } from 'react-hook-form';
import NumberInput from './NumberInput';
import { accessPath } from '@/shared/utils/objectUtils';

interface FormNumberInputProps {
  name: string;
  label: string;
  defaultValue?: string;
  className?: string;
}

const FormNumberInput = ({ name, label, ...props }: FormNumberInputProps) => {
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
        <NumberInput
          label={label}
          error={error?.message?.toString()}
          className={props.className}
          {...field}
        />
      )}
    />
  );
};

export default FormNumberInput;
