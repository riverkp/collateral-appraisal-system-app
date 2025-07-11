import { type InputHTMLAttributes } from 'react';
import Input from '../Input';

interface NumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  readonly?: boolean;
  error?: string;
}

const NumberInput = ({ label, error, readonly = false, ...props }: NumberInputProps) => {
  return (
    <div className={props.className}>
      <Input
        type="number"
        label={label}
        value={props.value}
        onChange={props.onChange}
        error={error}
      />
    </div>
  );
};

export default NumberInput;
