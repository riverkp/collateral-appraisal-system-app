import { Field, Label, Textarea as HeadlessTextarea } from '@headlessui/react';
import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  fullWidth?: boolean;
}

const Textarea = ({ label, error, fullWidth = true, ...props }: TextareaProps) => {
  return (
    <Field className={clsx(fullWidth && 'w-full', 'flex', 'flex-col')}>
      <Label>{label}</Label>
      <HeadlessTextarea className="border border-zinc-400/50 rounded" {...props} />
    </Field>
  );
};

export default Textarea;
