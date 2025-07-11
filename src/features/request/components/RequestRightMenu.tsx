import ProfileCard from '@/shared/components/ProfileCard';
import SectionHeader from '../../../shared/components/sections/SectionHeader';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

interface RequestRightMenuProps {}

const RequestRightMenu = ({}: RequestRightMenuProps) => {
  return (
    <div>
      <TabGroup className="flex flex-col gap-4">
        <TabList className="flex gap-4">
          <Tab className="data-selected:text-neutral-700 data-selected:font-bold data-selected:border-b">
            Overview
          </Tab>
          <Tab className="data-selected:text-neutral-700 data-selected:font-bold data-selected:border-b">
            Comments
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="flex flex-col gap-4">
            <SectionHeader title="Requestor" />
            <ProfileCard
              avatar={
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="rounded-full"
                />
              }
              label={'ME'}
              description={'Reacher Doe'}
            />
            <SectionHeader title="Creator" />
            <ProfileCard
              avatar={
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="rounded-full"
                />
              }
              label={'ME'}
              description={'Reacher Doe'}
            />
          </TabPanel>
          <TabPanel>Comment</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default RequestRightMenu;
