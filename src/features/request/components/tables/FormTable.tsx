import Icon from '@/shared/components/Icon';
import Input from '@/shared/components/Input';
import { useState } from 'react';
import {
  useController,
  useFieldArray,
  useFormContext,
  type Control,
  type FieldValues,
} from 'react-hook-form';

interface FormTableProps {
  name: string;
  headers: FormTableHeader[];
}

type FormTableHeader = FormTableRegularHeader | FormTableRowNumberHeader;

interface FormTableRegularHeader {
  name: string;
  label: string;
  inputType?: string;
}

interface FormTableRowNumberHeader {
  rowNumberColumn: true;
  label: string;
}

interface TableCellProps {
  name: string;
  index: number;
  editIndex: number | undefined;
  value: string;
  header: FormTableRegularHeader;
  control: Control<FieldValues, any, FieldValues>;
}

const FormTable = ({ name, headers }: FormTableProps) => {
  const { getValues, control } = useFormContext();
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
  const handleAddRow = () => {
    const newRow: Record<string, any> = {};
    for (const header of headers) {
      if ('name' in header) {
        newRow[header.name] = ''; // TODO: Get default value from zod
      }
    }
    append(newRow);
    setEditIndex(getValues(name).length - 1);
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
            // TODO: Find and add unique key
            <tr>
              {headers.map(header => {
                if ('name' in header) {
                  return (
                    <td>
                      <TableCell
                        name={name}
                        index={index}
                        editIndex={editIndex}
                        value={field[header.name]}
                        header={header}
                        control={control}
                      />
                    </td>
                  );
                } else {
                  return <td>{index + 1}</td>;
                }
              })}
              <td className="flex gap-2 justify-end">
                {editIndex === index ? (
                  <button type="button" onClick={() => setEditIndex(undefined)}>
                    <Icon style="solid" name="check" className="text-cyan-600" />
                  </button>
                ) : (
                  <button type="button" onClick={() => setEditIndex(index)}>
                    <Icon style="solid" name="pen" className="text-cyan-600" />
                  </button>
                )}
                <button type="button" onClick={() => handleDeleteRow(index)}>
                  <Icon style="solid" name="trash" className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={headers.length + 1} className="p-0">
              <button
                type="button"
                onClick={handleAddRow}
                className="w-full flex items-center justify-center m-0 px-0 py-1 bg-neutral-100"
              >
                <div className="bg-teal-600 size-6 rounded-full">
                  <Icon style="solid" name="plus" className="text-neutral-100" />
                </div>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const TableCell = ({ name, index, editIndex, value, header, control }: TableCellProps) => {
  const cellName = `${name}.${index}.${header.name}`;
  const {
    field,
    fieldState: { error },
  } = useController({ name: cellName, control });
  return (
    <div>
      {editIndex === index ? <Input type={header.inputType} {...field} /> : <div>{value}</div>}
      {error && <div className="mt-1 text-sm text-red-600">{error?.message}</div>}
    </div>
  );
};

export default FormTable;
