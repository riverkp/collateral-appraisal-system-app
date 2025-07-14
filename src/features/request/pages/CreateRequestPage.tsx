import { createRequestRequestDefaults } from '@/shared/forms/defaults';
import { CreateRequestRequest, type CreateRequestRequestType } from '@/shared/forms/v1';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import SectionHeader from '../../../shared/components/sections/SectionHeader';
import AddressForm from '../forms/AddressForm';
import Button from '@/shared/components/Button';
import RequestRightMenu from '../components/RequestRightMenu';
import { useDisclosure } from '@/shared/hooks/useDisclosure';
import AppHeader from '../../../shared/components/sections/AppHeader';
import CustomersForm from '../forms/CustomersForm';
import PropertiesForm from '../forms/PropertiesForm';
import RequestForm from '../forms/RequestForm';
import AppointmentAndFeeForm from '../forms/AppointmentAndFeeForm';
import ResizableSidebar from '@/shared/components/ResizableSidebar';
import TitleInformationForm from '../forms/TitleInformationForm';

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
  // TODO: Use React Query
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
        <AppHeader iconVariant="folder" title={'New request'} />
        <ResizableSidebar
          isOpen={isOpen}
          onToggle={onToggle}
          openedWidth="basis-xs"
          closedWidth="w-8"
        >
          <ResizableSidebar.Main>
            <div className="flex-auto flex flex-col gap-4 ">
              <SectionHeader title="Customers" />
              <CustomersForm />
              <SectionHeader title="Request" />
              <RequestForm />
              <SectionHeader title="Properties" />
              <PropertiesForm />
              <SectionHeader title="Location" />
              <AddressForm />
              <SectionHeader title="Appointment and Fee" />
              <AppointmentAndFeeForm />
              <SectionHeader title="Title Information" />
              <TitleInformationForm />
            </div>
          </ResizableSidebar.Main>
          <ResizableSidebar.Sidebar>
            <RequestRightMenu />
          </ResizableSidebar.Sidebar>
        </ResizableSidebar>
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
