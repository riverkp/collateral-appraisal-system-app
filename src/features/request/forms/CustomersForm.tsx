import FormTable from '../components/tables/FormTable';

const CustomersForm = () => {
  return (
    <div>
      <FormTable headers={customersTableHeader} name={'customers'} />
    </div>
  );
};

const customersTableHeader = [
  { label: 'Seq.no', rowNumberColumn: true as true },
  { name: 'name', label: 'Customer Name' },
  { name: 'contactNumber', label: 'Contact Number' },
];

export default CustomersForm;
