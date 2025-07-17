import { Switch, type SwitchProps } from '@headlessui/react';
import clsx from 'clsx';

interface ToggleProps extends SwitchProps {
  label: string;
  options: [string, string];
  error?: string;
}

const Toggle = ({ label, options, error, className, ...props }: ToggleProps) => {
  return (
    <div className={clsx('text-sm', className)}>
      <fieldset>
        <legend className="font-medium text-gray-700 mb-1">{label}</legend>
        <div className="flex border-2 border-transparent outline outline-neutral-300 w-fit rounded-[36px] gap-[1px]">
          <Switch className="flex flex-row relative" {...props}>
            <span className="sr-only">{`Toggle between ${options.join(' and ')}`}</span>
            {options.map((option, index) => (
              <div
                key={index}
                className={clsx(
                  (props.checked && index === 0) || (!props.checked && index === 1)
                    ? 'bg-lime-300'
                    : 'bg-white',
                  'py-2 px-4 rounded-[36px] transition-all duration-500',
                )}
              >
                <label className="flex">
                  <div>{option}</div>
                </label>
              </div>
            ))}
          </Switch>
        </div>
        <div>
          {error && (
            <p className={clsx('mt-1 text-sm', error ? 'text-red-600' : 'text-gray-500')}>
              {error}
            </p>
          )}
        </div>
      </fieldset>
    </div>
  );
};

export default Toggle;
