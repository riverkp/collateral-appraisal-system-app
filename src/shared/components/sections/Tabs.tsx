import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import clsx from 'clsx';
import {
  createContext,
  useContext,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from 'react';

interface TabsContextType {
  variant: 'small' | 'large';
}
const TabsContext = createContext<TabsContextType>({ variant: 'small' });

interface TabsProps {
  variant: 'small' | 'large';
  children: ReactNode;
}

interface TabsChildrenProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Tabs = ({ variant, children }: TabsProps) => {
  return (
    <TabsContext.Provider value={{ variant }}>
      <TabGroup className={clsx('flex flex-col gap-4')}>{children}</TabGroup>
    </TabsContext.Provider>
  );
};

Tabs.List = ({ children, ...props }: TabsChildrenProps) => {
  const { variant } = useContext(TabsContext);
  return (
    <TabList
      className={clsx('flex', variant === 'small' ? 'gap-4' : 'border-b border-misc-2')}
      {...props}
    >
      {children}
    </TabList>
  );
};

Tabs.Tab = ({ children, ...props }: TabProps) => {
  const { variant } = useContext(TabsContext);
  return (
    <Tab
      className={clsx(
        'py-2 uppercase',
        variant === 'small'
          ? 'text-misc-2 data-selected:text-neutral-5 font-bold data-selected:border-b data-selected:border-misc-4'
          : 'px-6 text-misc-2 data-selected:text-neutral-5 data-selected:border-b-2 data-selected:border-misc-3',
      )}
      {...props}
    >
      {children}
    </Tab>
  );
};

Tabs.Panels = ({ children, ...props }: TabsChildrenProps) => (
  <TabPanels {...props}>{children}</TabPanels>
);
Tabs.Panel = ({ children, ...props }: TabsChildrenProps) => (
  <TabPanel {...props}>{children}</TabPanel>
);

export default Tabs;
