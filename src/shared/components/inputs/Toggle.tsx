import { accessPath } from '@/shared/utils/objectUtils';
import clsx from 'clsx';
import { type HTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  choices: string[];
  name: string;
  booleanTrueOption?: string;
}

const Toggle = ({ label, choices, name, ...props }: ToggleProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  let error = accessPath(errors, name.split('.'));
  let registerProps = register(name, {
    ...(props.booleanTrueOption !== undefined
      ? { setValueAs: v => v === props.booleanTrueOption }
      : {}),
  });

  return (
    <div className={`text-sm ${props.className}`}>
      <fieldset>
        <legend className="font-medium text-gray-700 mb-1">{label}</legend>
        <div className="flex border-2 border-transparent outline outline-neutral-300 w-fit rounded-[36px] gap-[1px]">
          {choices.map(choice => {
            return (
              <div>
                <label className="flex">
                  <input
                    type="radio"
                    value={choice}
                    className="peer hidden"
                    {...registerProps}
                  />
                  <div className="peer-checked:bg-blue-500 py-2 px-4 rounded-[36px] transition-all duration-500">
                    {choice}
                  </div>
                </label>
              </div>
            );
          })}
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

export default Toggle;
