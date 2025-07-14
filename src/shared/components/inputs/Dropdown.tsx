import {
  Listbox as HeadlessListBox,
  ListboxButton as HeadlessListboxButton,
  ListboxOption as HeadlessListboxOption,
  ListboxOptions as HeadlessListboxOptions,
  ListboxSelectedOption as HeadlessListboxSelectedOption,
} from '@headlessui/react';
import { type ReactNode, type SelectHTMLAttributes } from 'react';
import Icon from '../Icon';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: ListBoxItem[];
  label: string;
  placeholder?: string;
  onChange: (value: any) => void;
  error?: string;
}

interface ListBoxProps {
  value: string | null | unknown;
  onChange: (value: any) => void;
  placeholder: string;
  children: ReactNode;
}

interface ListBoxOptionProps {
  children: ReactNode;
  value: ListBoxItem | null;
}

export type ListBoxItem = {
  value: string;
  label: string;
  id?: string | number;
};

const Dropdown = ({
  options,
  value,
  label,
  placeholder = 'Please select',
  ...props
}: DropdownProps) => {
  const selectedOption = options.find(opt => opt.value === value) ?? null;
  const selectedOnChange = (opt: ListBoxItem) => props.onChange(opt.value);
  return (
    <div className={'w-full ' + props.className}>
      <div className="block text-sm font-medium text-gray-700 mb-1">{label}</div>
      <ListBox value={selectedOption} onChange={selectedOnChange} placeholder={placeholder}>
        {options.map(option => (
          <ListBoxOption key={option.id ?? option.value} value={option}>
            {option.label}
          </ListBoxOption>
        ))}
      </ListBox>
      {props.error && <div className="mt-1 text-sm text-red-600">{props.error}</div>}
    </div>
  );
};

const ListBox = ({ placeholder, children, ...props }: ListBoxProps) => {
  return (
    <HeadlessListBox {...props}>
      <HeadlessListboxButton className="relative w-full rounded-lg border border-neutral-300 text-left focus:not-data-focus:outline-none pr-10">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
          <Icon style="regular" name="chevron-down" />
        </div>
        <HeadlessListboxSelectedOption
          placeholder={<div className="px-4 py-2 text-gray-400">{placeholder}</div>}
          options={children}
        />
      </HeadlessListboxButton>
      <HeadlessListboxOptions
        anchor="bottom"
        className="w-(--button-width) bg-white rounded-lg border border-neutral-300"
      >
        {children}
      </HeadlessListboxOptions>
    </HeadlessListBox>
  );
};

const ListBoxOption = ({ children, value, ...props }: ListBoxOptionProps) => {
  return (
    <HeadlessListboxOption
      value={value}
      className="group flex gap-2 data-focus:bg-lime-100 px-4 py-2 rounded-lg"
      {...props}
    >
      {({ selected }) => (selected ? <>{children}</> : <div>{children}</div>)}
    </HeadlessListboxOption>
  );
};

export default Dropdown;
