import FormSection, { type FormField } from '@/shared/components/sections/FormSection';
import TitleItemCardPanel from '../components/TitleItemCardPanel';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import TitleLandForm from './TitleLandForm';
import TitleBuildingForm from './TitleBuildingForm';
import TitleCondoForm from './TitleCondoForm';
import TitleVehicleForm from './TitleVehicleForm';
import TitleMachineForm from './TitleMachineForm';

interface TitleInformationMainPanelProps {
  index: number | undefined;
  currentFormType: string | undefined;
}

interface TitleFormProps {
  index: number;
  currentFormType: string | undefined;
}

const TitleInformationForm = () => {
  const [editIndex, setEditIndex] = useState<number | undefined>();
  const [currentFormType, setCurrentFormType] = useState();

  const { getValues } = useFormContext();

  useEffect(() => {
    const value = getValues(`titles.${editIndex}.collateral.collateralType`);
    setCurrentFormType(value);
  });

  return (
    <div className="flex gap-6">
      <div className="flex-1/5">
        <TitleItemCardPanel name="titles" setEditIndex={setEditIndex} />
      </div>
      <div>
        <TitleInformationMainPanel
          index={editIndex}
          currentFormType={currentFormType}
          key={editIndex}
        />
      </div>
    </div>
  );
};

const TitleInformationMainPanel = ({ index, currentFormType }: TitleInformationMainPanelProps) => {
  return index === undefined ? (
    <>Table</>
  ) : (
    <div className="grid grid-cols-6 gap-3">
      <FormSection fields={titleFields} namePrefix="titles" index={index} />
      <TitleForm index={index} currentFormType={currentFormType} />
    </div>
  );
};

const TitleForm = ({ index, currentFormType }: TitleFormProps) => {
  switch (currentFormType) {
    case 'land':
      return <TitleLandForm index={index} />;
    case 'building':
      return <TitleBuildingForm index={index} />;
    case 'landAndBuilding':
      return (
        <>
          <TitleLandForm index={index} />
          <TitleBuildingForm index={index} variant={2} />
        </>
      );
    case 'condominium':
      return <TitleCondoForm index={index} />;
    case 'vehicle':
      return <TitleVehicleForm index={index} />;
    case 'machine':
      return <TitleMachineForm index={index} />;
    case 'leaseAgreementLand':
      return <TitleLandForm index={index} />;
    case 'leaseAgreementLandAndBuilding':
      return <TitleBuildingForm index={index} />;
    case 'leaseAgreementBuilding':
      return (
        <>
          <TitleLandForm index={index} />
          <TitleBuildingForm index={index} variant={2} />
        </>
      );
    default:
      return <></>;
  }
};

const titleFields: FormField[] = [
  {
    type: 'dropdown',
    label: 'Collateral Type',
    name: 'collateral.collateralType',
    options: [
      {
        value: 'land',
        label: 'Land',
      },
      {
        value: 'landAndBuilding',
        label: 'Land and Building',
      },
      {
        value: 'building',
        label: 'Building',
      },
      {
        value: 'condominium',
        label: 'Condominium',
      },
      {
        value: 'vehicle',
        label: 'Vehicle',
      },
      {
        value: 'machine',
        label: 'Machine',
      },
      {
        value: 'leaseAgreementLand',
        label: 'Lease Agreement Land',
      },
      {
        value: 'leaseAgreementLandAndBuilding',
        label: 'Lease Agreement Land and Building',
      },
      {
        value: 'leaseAgreementBuilding',
        label: 'Lease Agreement Building',
      },
    ],
    wrapperClassName: 'col-span-3',
  },
  {
    type: 'text-input',
    label: 'Previous Appraisal Report No / CAS Status',
    name: 'collateral.collateralStatus',
    wrapperClassName: 'col-span-3',
  },
];

export default TitleInformationForm;
