import { createRequestRequestDefaults } from '@/shared/forms/defaults';
import {
  CreateRequestRequest,
  type AddressDtoType,
  type CreateRequestRequestType,
} from '@/shared/forms/v1';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import SectionHeader from '../../../shared/components/sections/SectionHeader';
import FormSection from '../../../shared/components/sections/FormSection';
import { addressFields, type AddressFields } from '../forms/addressForm';
import Button from '@/shared/components/Button';
import RequestRightMenu from '../components/RequestRightMenu';
import { useDisclosure } from '@/shared/hooks/useDisclosure';
import AppHeader from '../../../shared/components/sections/AppHeader';

function CreateRequestPage() {
  const methods = useForm<CreateRequestRequestType>({
    defaultValues: createRequestRequestDefaults,
    resolver: zodResolver(CreateRequestRequest),
  });
  const {
    // control,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<CreateRequestRequestType> = data => {
    console.log(data);
    axios
      .post('https://localhost:7111/requests', data)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
  const { isOpen, onToggle } = useDisclosure();

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <AppHeader iconVariant='folder' title={'New request'} />
        <div className="flex flex-row divide-x">
          <div className="p-6 flex-auto flex flex-col gap-4 border-gray-200">
            <SectionHeader title="Location" />
            <FormSection<AddressDtoType, AddressFields>
              fields={addressFields}
              namePrefix="address."
              className="grid grid-cols-6 gap-3"
            />
          </div>
          <RequestRightMenu isOpen={isOpen} onToggle={onToggle} />
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between">
          <div className="flex divide-x gap-4">
            <div className="border-gray-200">
              <Button variant="ghost">Cancel</Button>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">Delete</Button>
              <Button variant="outline">Duplicate</Button>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline">Save draft</Button>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default CreateRequestPage;
