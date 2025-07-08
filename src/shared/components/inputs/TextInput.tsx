import { type InputHTMLAttributes } from 'react';
import Input from '../Input';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  readonly?: boolean;
  error?: string;
}

const TextInput = ({ label, error, readonly = false, ...props }: TextInputProps) => {
  return (
    <div className={props.className}>
      <Input label={label} value={props.value} onChange={props.onChange} error={error} />
    </div>
  );
};

export default TextInput;
