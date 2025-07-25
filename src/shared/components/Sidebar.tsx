import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import { classNames } from '@shared/utils/classNames';
import { useUIStore } from '../store';

type Navigation = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: string }>;
  current: boolean;
};

export function MobileSidebar({
  navigation,
  logo,
}: {
  navigation: Navigation[];
  logo: string;
}): React.ReactNode {
  const sidebarOpen = useUIStore(state => state.sidebarOpen);
  const setSidebarOpen = useUIStore(state => state.setSidebarOpen);

  return (
    <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
      />

      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
        >
          <TransitionChild>
            <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
              <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                <span className="sr-only">Close sidebar</span>
                {/*TODO: Add icon*/}
                {/*<XMarkIcon aria-hidden="true" className="size-6 text-white" />*/}
              </button>
            </div>
          </TransitionChild>

          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img alt="LHBank" src={logo} className="h-8 w-auto" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul className="-mx-2 space-y-1">
                    {navigation.map(item => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={
                              classNames(
                                item.current
                                  ? 'text-indigo-600'
                                  : 'text-gray-400 group-hover:text-indigo-600',
                                'size-6 shrink-0',
                              ) as string
                            }
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                {/*<li>*/}
                {/*  <div className="text-xs/6 font-semibold text-gray-400">Application</div>*/}
                {/*  <ul className="-mx-2 mt-2 space-y-1">*/}
                {/*    {[].map(team => (*/}
                {/*      <li key={team.name}>*/}
                {/*        <a*/}
                {/*          href={team.href}*/}
                {/*          className={classNames(*/}
                {/*            team.current*/}
                {/*              ? 'bg-gray-50 text-indigo-600'*/}
                {/*              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',*/}
                {/*            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',*/}
                {/*          )}*/}
                {/*        >*/}
                {/*          <span*/}
                {/*            className={classNames(*/}
                {/*              team.current*/}
                {/*                ? 'border-indigo-600 text-indigo-600'*/}
                {/*                : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',*/}
                {/*              'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',*/}
                {/*            )}*/}
                {/*          >*/}
                {/*            {team.initial}*/}
                {/*          </span>*/}
                {/*          <span className="truncate">{team.name}</span>*/}
                {/*        </a>*/}
                {/*      </li>*/}
                {/*    ))}*/}
                {/*  </ul>*/}
                {/*</li>*/}
                <li className="mt-auto">
                  <a
                    href="/"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    {/*TODO: Add icon*/}
                    {/*<Cog6ToothIcon*/}
                    {/*  aria-hidden="true"*/}
                    {/*  className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"*/}
                    {/*/>*/}
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default function Sidebar({
  navigation,
  logo,
}: {
  navigation: Navigation[];
  logo: string;
}): React.ReactNode {
  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img alt="Your LHBank" src={logo} className="h-8 w-auto" />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-50 text-indigo-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                        'group flex items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className={classNames(
                          item.current
                            ? 'text-indigo-600'
                            : 'text-gray-400 group-hover:text-indigo-600',
                          'size-6 shrink-0',
                        )}
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {/*<li>*/}
            {/*  <div className="text-xs/6 font-semibold text-gray-400">Application</div>*/}
            {/*  <ul className="-mx-2 mt-2 space-y-1">*/}
            {/*    {[].map(team => (*/}
            {/*      <li key={team.name}>*/}
            {/*        <a*/}
            {/*          href={team.href}*/}
            {/*          className={classNames(*/}
            {/*            team.current*/}
            {/*              ? 'bg-gray-50 text-indigo-600'*/}
            {/*              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',*/}
            {/*            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',*/}
            {/*          )}*/}
            {/*        >*/}
            {/*          <span*/}
            {/*            className={classNames(*/}
            {/*              team.current*/}
            {/*                ? 'border-indigo-600 text-indigo-600'*/}
            {/*                : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',*/}
            {/*              'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',*/}
            {/*            )}*/}
            {/*          >*/}
            {/*            {team.initial}*/}
            {/*          </span>*/}
            {/*          <span className="truncate">{team.name}</span>*/}
            {/*        </a>*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</li>*/}
            <li className="mt-auto">
              <a
                href="/"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                {/*TODO: Add icon*/}
                {/*<Cog6ToothIcon*/}
                {/*  aria-hidden="true"*/}
                {/*  className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"*/}
                {/*/>*/}
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
