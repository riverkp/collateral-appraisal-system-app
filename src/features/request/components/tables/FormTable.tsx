import Icon from '@/shared/components/Icon';
import Input from '@/shared/components/Input';
import { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

interface FormTableProps {
  name: string;
  headers: FormTableHeader[];
}

interface FormTableHeader {
  name: string;
  label: string;
  inputType?: string;
}

const FormTable = ({ name, headers }: FormTableProps) => {
  const { getValues, register, control } = useFormContext();
  const { append, remove } = useFieldArray({
    control,
    name: name,
  });
  const values = getValues(name);
  const [editIndex, setEditIndex] = useState<number | undefined>();
  const handleDeleteRow = (index: number) => {
    setEditIndex(undefined);
    remove(index);
  };

  return (
    <div>
      <table className="table">
        <thead className="bg-lime-400">
          <tr>
            {headers.map(header => (
              <th>{header.label}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {values.map((field: Record<string, any>, index: number) => (
            <tr key={field.id}>
              {headers.map(header => (
                <td>
                  {editIndex === index ? (
                    <Input
                      type={header.inputType}
                      {...register(`${name}.${index}.${header.name}`)}
                    />
                  ) : (
                    // @ts-ignore
                    field[header.name]
                  )}
                </td>
              ))}
              <td className="flex gap-2 justify-end">
                {editIndex === index ? (
                  <button type="button" onClick={() => setEditIndex(undefined)}>
                    <Icon style="solid" name="check" className='text-cyan-600' />
                  </button>
                ) : (
                  <button type="button" onClick={() => setEditIndex(index)}>
                    <Icon style="solid" name="pen" className='text-cyan-600' />
                  </button>
                )}
                <button type="button" onClick={() => handleDeleteRow(index)}>
                  <Icon style="solid" name="trash" className='text-red-500' />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={headers.length + 1} className="p-0">
              <button
                type="button"
                onClick={() => append({ name: '', contactNumber: '' })}
                className="w-full flex items-center justify-center m-0 px-0 py-1 bg-neutral-100"
              >
                <div className="bg-teal-600 size-6 rounded-full">
                  <Icon style="solid" name="plus" className='text-neutral-100' />
                </div>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FormTable;
