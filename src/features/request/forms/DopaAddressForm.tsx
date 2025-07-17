import type { FormField } from '@/shared/components/sections/FormSection';
import FormSection from '@/shared/components/sections/FormSection';
import TitleInformationHeader from '../components/TitleInformationHeader';

interface DopaAdressFormProps {
  index: number;
}

const DopaAdressForm = ({ index }: DopaAdressFormProps) => {
  return (
    <>
      <TitleInformationHeader title="DOPA address" className="col-span-6" />
      <FormSection fields={dopaAddressFields} namePrefix={'titles'} index={index} />
    </>
  );
};

export const dopaAddressFields: FormField[] = [
  {
    type: 'text-input',
    label: 'House No',
    name: 'dopaAddress.houseNo',
    wrapperClassName: 'col-span-2',
  },
  {
    type: 'text-input',
    label: 'Room No',
    name: 'dopaAddress.roomNo',
    wrapperClassName: 'col-span-2',
  },
  {
    type: 'text-input',
    label: 'Floor No',
    name: 'dopaAddress.floorNo',
    wrapperClassName: 'col-span-2',
  },
  {
    type: 'text-input',
    label: 'Village/Building No',
    name: 'dopaAddress.villageBuilding',
    wrapperClassName: 'col-span-6',
  },
  {
    type: 'text-input',
    label: 'Moo',
    name: 'dopaAddress.moo',
    wrapperClassName: 'col-span-2',
  },
  {
    type: 'text-input',
    label: 'Soi',
    name: 'dopaAddress.soi',
    wrapperClassName: 'col-span-2',
  },
  {
    type: 'text-input',
    label: 'Road',
    name: 'dopaAddress.road',
    wrapperClassName: 'col-span-2',
  },
  {
    type: 'text-input',
    label: 'Sub District',
    name: 'dopaAddress.subDistrict',
    wrapperClassName: 'col-span-2',
    required: true,
  },
  {
    type: 'text-input',
    label: 'District',
    name: 'dopaAddress.district',
    wrapperClassName: 'col-span-2',
    required: true,
    disabled: true,
  },
  {
    type: 'text-input',
    label: 'Province',
    name: 'dopaAddress.province',
    wrapperClassName: 'col-span-2',
    required: true,
    disabled: true,
  },
  {
    type: 'text-input',
    label: 'Postcode',
    name: 'dopaAddress.postcode',
    wrapperClassName: 'col-span-2',
    disabled: true,
  },
];

export default DopaAdressForm;
