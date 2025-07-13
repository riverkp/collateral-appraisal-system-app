import Input from '@/shared/components/Input';
import FormTable from '../components/tables/FormTable';
import { useController, useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';
import type { RequestPropertyDtoType } from '@/shared/forms/v1';

const PropertiesForm = () => {
  const { control, watch } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name: 'loanDetail.totalSellingPrice', control });

  const [totalSellingPrice, setTotalSellingPrice] = useState(0);

  useEffect(() => {
    watch(value => {
      const properties: RequestPropertyDtoType[] = value.properties;
      setTotalSellingPrice(calcTotalPrice(properties));
    });
  }, [watch]);

  return (
    <div>
      <FormTable headers={propertiesTableHeader} name={'properties'} />
      <Input
        type="number"
        {...field}
        label="Total Selling Price"
        value={totalSellingPrice}
        error={error?.message}
        readOnly
      />
    </div>
  );
};

const propertiesTableHeader = [
  { name: 'propertyType', label: 'Property Type' },
  { name: 'buildingType', label: 'Building Type' },
  { name: 'sellingPrice', label: 'Selling Price', inputType: 'number' },
];

function calcTotalPrice(properties: RequestPropertyDtoType[]): number {
  return properties.reduce((acc, property) => acc + convertToNumber(property.sellingPrice, 0), 0);
}

function convertToNumber(n: any, fallback: number): number {
  const number = Number(n);
  return isNaN(number) ? fallback : number;
}

export default PropertiesForm;
