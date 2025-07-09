import { type HTMLAttributes } from 'react';

interface ToggleProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  choices: string[];
  selectedChoice: string;
  setSelectedChoice: React.Dispatch<React.SetStateAction<string>>;
}

const Toggle = ({ label, choices, selectedChoice, setSelectedChoice, ...props }: ToggleProps) => {
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
                    checked={selectedChoice === choice}
                    onChange={e => setSelectedChoice(e.target.value)}
                    className="peer hidden"
                  />
                  <div className="peer-checked:bg-blue-500 py-2 px-4 rounded-[36px] transition-all duration-500">
                    {choice}
                  </div>
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};

export default Toggle;
