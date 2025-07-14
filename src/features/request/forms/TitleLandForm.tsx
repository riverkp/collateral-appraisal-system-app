import FormSection, { type FormField } from '@/shared/components/sections/FormSection';

interface TitleLandFormProps {
  index: number;
}

const TitleLandForm = ({ index }: TitleLandFormProps) => {
  return <FormSection fields={landFields} namePrefix={'titles'} index={index} />;
};

const landFields: FormField[] = [
  {
    type: 'text-input',
    label: 'Title No',
    name: 'collateral.titleNo',
    wrapperClassName: 'col-span-6',
  },
  {
    type: 'text-input',
    label: 'Rai',
    name: 'area.rai',
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'text-input',
    label: 'Ngan',
    name: 'area.ngan',
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'text-input',
    label: 'Wa',
    name: 'area.wa',
    wrapperClassName: 'col-span-1',
  },
  {
    type: 'textarea',
    label: 'Title Detail',
    name: 'collateral.titleDetail',
    wrapperClassName: 'col-span-6',
  },
];

export default TitleLandForm;