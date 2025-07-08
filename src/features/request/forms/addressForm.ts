import type { FormField } from '@/shared/components/FormSection';
import type { AddressDtoType } from '@/shared/forms/v1';

export type AddressFields = {
  [K in keyof AddressDtoType]: FormField;
};

export const addressFields: AddressFields = {
  houseNo: {
    type: 'text-input',
    label: 'House No',
    className: 'col-span-2',
  },
  roomNo: {
    type: 'text-input',
    label: 'Room No',
    className: 'col-span-2',
  },
  floorNo: {
    type: 'text-input',
    label: 'Floor No',
    className: 'col-span-2',
  },
  villageBuilding: {
    type: 'text-input',
    label: 'Village/Building',
    className: 'col-span-6',
  },
  moo: {
    type: 'text-input',
    label: 'Moo',
    className: 'col-span-2',
  },
  soi: {
    type: 'text-input',
    label: 'Soi',
    className: 'col-span-2',
  },
  road: {
    type: 'text-input',
    label: 'Road',
    className: 'col-span-2',
  },
  subDistrict: {
    type: 'text-input',
    label: 'Sub District',
    className: 'col-span-3',
  },
  district: {
    type: 'text-input',
    label: 'District',
    className: 'col-span-3',
  },
  province: {
    type: 'text-input',
    label: 'Province',
    className: 'col-span-3',
  },
  postcode: {
    type: 'text-input',
    label: 'Postcode',
    className: 'col-span-3',
  },
  contactPersonName: {
    type: 'text-input',
    label: 'Contact Person Name',
    className: 'col-span-3',
  },
  contactPersonPhoneNo: {
    type: 'text-input',
    label: 'Contact Person Phone No',
    className: 'col-span-3',
  },
  locationIdentifier: {
    type: 'listbox',
    label: 'Location Identifier',
    className: 'col-span-6',
    options: [
      {
        value: 'a',
        label: 'A'
      },
      {
        value: 'b',
        label: 'B'
      },
    ],
  },
};
