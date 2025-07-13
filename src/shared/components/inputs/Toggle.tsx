import { accessPath } from '@/shared/utils/objectUtils';
import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import { type HTMLAttributes } from 'react';
import {
  Controller,
  useFormContext,
  type Control,
  type FieldValues,
  type UseFormRegisterReturn,
} from 'react-hook-form';

interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  choices: string[];
  name: string;
  valueType?: 'boolean' | 'string';
}

interface BooleanToggleProps {
  choices: string[];
  name: string;
  control: Control<FieldValues, any, FieldValues>;
}

interface StringToggleProps {
  choices: string[];
  registerProps: UseFormRegisterReturn<string>;
}

// TODO: clean this up
const Toggle = ({ label, choices, name, valueType = 'boolean', ...props }: ToggleProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  let error = accessPath(errors, name.split('.'));
  let registerProps = register(name);

  return (
    <div className={clsx('text-sm', props.className)}>
      <fieldset>
        <legend className="font-medium text-gray-700 mb-1">{label}</legend>
        <div className="flex border-2 border-transparent outline outline-neutral-300 w-fit rounded-[36px] gap-[1px]">
          {valueType === 'boolean' ? (
            <BooleanToggle name={name} control={control} choices={choices} />
          ) : (
            <StringToggle choices={choices} registerProps={registerProps} />
          )}
        </div>
        <div>
          {error?.message?.toString() && (
            <p className={clsx('mt-1 text-sm', error ? 'text-red-600' : 'text-gray-500')}>
              {error?.message?.toString()}
            </p>
          )}
        </div>
      </fieldset>
    </div>
  );
};

const StringToggle = ({ choices, registerProps }: StringToggleProps) => {
  return (
    <>
      {choices.map((choice, index) => {
        return (
          <div key={index}>
            <label className="flex">
              <input type="radio" value={choice} className="peer hidden" {...registerProps} />
              <div className="peer-checked:bg-lime-300 py-2 px-4 rounded-[36px] transition-all duration-500">
                {choice}
              </div>
            </label>
          </div>
        );
      })}
    </>
  );
};

const BooleanToggle = ({ name, control, choices }: BooleanToggleProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Switch checked={field.value} onChange={field.onChange} className="flex flex-row relative">
          <span className="sr-only">Toggle between {`${choices.join(', ')}`}</span>
          {choices.map((choice, index) => {
            return (
              <div key={index}>
                <label className="flex">
                  <div
                    className={`${(field.value === true && index === 1) || (field.value === false && index === 0) ? 'bg-lime-300' : ''} py-2 px-4 rounded-[36px] transition-all duration-500`}
                  >
                    {choice}
                  </div>
                </label>
              </div>
            );
          })}
        </Switch>
      )}
    />
  );
};

export default Toggle;
