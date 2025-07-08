import { type InputHTMLAttributes } from 'react';
import Input from './Input';

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  readonly?: boolean;
  error?: string;
}

const DateInput = ({ value, label, ...props }: DateInputProps) => {
  return (
    <div className={props.className}>
      <Input label={label} type="date" value={value} onChange={props.onChange} />
    </div>
  );
};

export default DateInput;
