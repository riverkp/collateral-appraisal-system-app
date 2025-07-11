import { Field, Label, Textarea as HeadlessTextarea } from '@headlessui/react';
import type { HTMLAttributes } from 'react';

interface TextareaProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  readonly?: boolean;
}

const Textarea = ({ value, setValue, label, ...props }: TextareaProps) => {
  return (
    <div className={props.className}>
      <Field className="flex flex-col">
        <Label>{label}</Label>
        <HeadlessTextarea
          value={value}
          onChange={e => setValue(e.target.value)}
          className="border border-zinc-400/50 rounded"
        />
      </Field>
    </div>
  );
};

export default Textarea;
