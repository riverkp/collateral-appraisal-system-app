export type UIStore = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T] & Partial<T>;
