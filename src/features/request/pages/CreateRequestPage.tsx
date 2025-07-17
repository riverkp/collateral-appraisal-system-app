import { createRequestRequestDefaults } from '@/shared/forms/defaults';
import { CreateRequestRequest, type CreateRequestRequestType } from '@/shared/forms/v1';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
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
import AttachDocumentForm from '../forms/AttachDocumentForm';
import { useCreateRequest } from '../api';

function CreateRequestPage() {
  const methods = useForm<CreateRequestRequestType>({
    defaultValues: createRequestRequestDefaults,
    resolver: zodResolver(CreateRequestRequest),
  });
  const {
    // control,
    handleSubmit,
    getValues,
    // watch,
    // formState: { errors },
  } = methods;

  const { mutate } = useCreateRequest();
  const onSubmit: SubmitHandler<CreateRequestRequestType> = data => {
    mutate(data);
  };
  const { isOpen, onToggle } = useDisclosure();
  const handleSaveDraft = () => {
    const data = getValues();
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <AppHeader iconVariant="folder" title={'New request'} />
        <ResizableSidebar
          isOpen={isOpen}
          onToggle={onToggle}
          openedWidth="w-1/5"
          closedWidth="w-1/50"
        >
          <ResizableSidebar.Main>
            <div className="flex-auto flex flex-col gap-4 ">
              <CustomersForm />
              <RequestForm />
              <PropertiesForm />
              <AddressForm />
              <AppointmentAndFeeForm />
              <TitleInformationForm />
              <AttachDocumentForm />
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
              <Button variant="ghost" type="button">
                Cancel
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" type="button">
                Delete
              </Button>
              <Button variant="outline" type="button">
                Duplicate
              </Button>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" type="button" onClick={handleSaveDraft}>
              Save draft
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default CreateRequestPage;
