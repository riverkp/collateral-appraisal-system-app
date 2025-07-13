import FormSection, { type FormField } from '@/shared/components/sections/FormSection';

const RequestForm = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <FormSection fields={requestFields} />
    </div>
  );
};

const requestFields: FormField[] = [
  {
    type: 'dropdown',
    label: 'Appraisal Purpose',
    name: 'purpose',
    options: [
      {
        value: 'a',
        label: 'A',
      },
      {
        value: 'b',
        label: 'B',
      },
    ],
    wrapperClassName: 'col-span-3',
  },
  {
    type: 'toggle',
    label: 'Customer bring the appraisal book',
    name: 'hasAppraisalBook',
    options: ['Yes', 'No'],
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'toggle',
    label: 'Priority',
    name: 'priority',
    options: ['High', 'Normal'],
    valueType: 'string',
    wrapperClassName: 'col-span-2',
  },
  {
    type: 'dropdown',
    label: 'Previous Appraisal Report No',
    name: 'reference.prevAppraisalNo',
    options: [
      {
        value: 'a',
        label: 'A',
      },
      {
        value: 'b',
        label: 'B',
      },
    ],
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'number-input',
    label: 'Previous Appraisal Value',
    name: 'reference.prevAppraisalValue',
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'date-input',
    label: 'Previous Appraisal Date',
    name: 'reference.prevAppraisalDate',
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'dropdown',
    label: 'Channel',
    name: 'channel',
    options: [
      {
        value: 'a',
        label: 'A',
      },
      {
        value: 'b',
        label: 'B',
      },
    ],
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'dropdown',
    label: 'Retail / IBG',
    name: '???', // TODO: find the name
    options: [
      {
        value: 'a',
        label: 'A',
      },
      {
        value: 'b',
        label: 'B',
      },
    ],
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'number-input',
    label: 'Loan Application No',
    name: 'loanDetail.loanApplicationNo',
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'number-input',
    label: 'Apply/Limit Amount',
    name: 'loanDetail.limitAmt',
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'number-input',
    label: 'Increase Limit Amount',
    name: '???1', // TODO: find the name
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'number-input',
    label: 'Old Limit Amount',
    name: '???2', // TODO: find the name
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'number-input',
    label: 'Occurrence of Construction Inspection',
    name: 'occurConstInspec',
    wrapperClassName: 'col-span-1',
  },
];

export default RequestForm;
