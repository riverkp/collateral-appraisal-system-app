# GitHub Copilot Instruction for This Project

## 🧠 Overview

This project is a modern React-based frontend built with:

- ⚛️ **React** (via Vite) – component-driven UI
- 🧵 **Zustand** – global and local state management
- 🔁 **@tanstack/react-query** – API data fetching & caching
- 🎨 **Tailwind CSS** – utility-first styling
- 📁 **Feature-based structure** – scalable & organized
- 🧰 TypeScript, ESLint, Prettier, and path aliasing for DX

---

## 📂 Project Structure (Feature-Based)

```
src/
├── app/                    # App-wide setup (routing, layout, providers)
│   ├── App.tsx
│   ├── main.tsx
│   └── router.tsx
│
├── features/               # All business logic grouped by feature
│   ├── auth/
│   │   ├── components/     # Auth-specific UI components
│   │   ├── pages/          # Pages (e.g., LoginPage.tsx)
│   │   ├── hooks/          # Custom hooks for auth
│   │   ├── store.ts        # Zustand store
│   │   ├── api.ts          # React Query functions
│   │   └── types.ts
│   └── dashboard/
│       └── ...
│
├── shared/                 # Reusable code across features
│   ├── components/         # Shared UI components
│   ├── hooks/              # Utility hooks
│   ├── api/                # Axios instance and helpers
│   ├── utils/              # Pure functions/helpers
│   └── types/              # Global types/interfaces
│
├── styles/                 # Tailwind config and global styles
│   └── tailwind.css
│
├── config/                 # App config, env helpers
└── assets/                 # Images, fonts, etc.
```

---

## 🧰 Guidelines & Best Practices

- ✅ Colocate files by feature
- ✅ Keep shared logic minimal and reusable
- ✅ Use TypeScript with `strict` mode
- ✅ Use path aliases via `tsconfig.json` (e.g., `@/features`, `@/shared`)
- ✅ Lint & format with ESLint + Prettier

### Axios (API Client)

- ✅ Centralize your Axios instance
    - Create a shared Axios instance in `shared/api/axiosInstance.ts` with base config.

```ts
// apiClient.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://your-api-url.com',
    timeout: 10000, // 10s timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;

```

- ✅ Use the instance across your app:

```ts
import axios from './apiClient';

const fetchUser = (id) => apiClient.get(`/users/${id}`);
```

- ✅ Add interceptors for:
    - Injecting auth token
    - Handling global error cases

```ts
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        // Handle token expiration, logging, global errors
        if (error.response?.status === 401) {
            // Optionally redirect to login
        }
        return Promise.reject(error);
    }
);

```

- ✅ Set timeouts (don’t let requests hang forever)
- ✅ Use retry strategies for transient errors (via libraries like `axios-retry`)
- ✅ In React: consider `React Query (TanStack Query)` to manage caching, retries, deduplication, etc. instead of raw
  `Axios` calls everywhere.
- ✅ Use TypeScript

```ts

interface User {
    id: number;
    name: string;
}

const fetchUser = async (id: number): Promise<User> => {
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
};

```

---

### Zustand (State Management)

- ✅ Use ** feature - local Zustand stores ** unless truly global.
- ✅ Global state(e.g., user session) can live in a shared`store`.

```ts

// features/auth/store.ts
import {create} from 'zustand';

type AuthStore = {
    user: User | null;
    setUser: (user: User) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    setUser: (user) => set({user}),
}));

```

- ✅ Use functional updates when needed

```ts
increment: () => set((state) => ({count: state.count + 1}))
```

- ✅ Use selectors to avoid unnecessary re-renders

```ts
const count = useStore((state) => state.count);
```

---

### React Query (TanStack)

- ✅ Use `useQuery` for GET, `useMutation` for POST/PUT/DELETE.
- ✅ Use custom hooks per resource (place query functions inside `api.ts` in each feature).

```ts
// features/auth/api.ts
import {useQuery} from '@tanstack/react-query';
import axios from '@/shared/api/axiosInstance';

export const useCurrentUser = () =>
    useQuery(['user'], () => axios.get('/me').then(res => res.data));
```

- ✅ Choose `staleTime` Wisely, `refetchOnWindowFocus` Carefully

  `staleTime`
    - prevents unnecessary refetching.
    - If data rarely changes (ex: country list), set large `staleTime` (minutes/hours).
    - If data is very dynamic (ex: notifications), use low `staleTime` or leave it at default.

  `refetchOnWindowFocus`
    - Use `refetchOnWindowFocus` based on user experience needs.
    - Default = true — good for dynamic apps.
    - For large static data or data that is expensive to fetch → set to false.

```ts
useQuery(['countries'], fetchCountries, {staleTime: 1000 * 60 * 60, refetchOnWindowFocus: false}) // 1 hour
```

- ✅ Use select to Shape Data

```ts
useQuery(['users'], fetchUsers, {
    select: data => data.map(user => user.name),
});
```

- ✅ Use `useInfiniteQuery` for infinite scrolling.
- ✅ Use proper `getNextPageParam`.
- ✅ Use `refetch()` to force updates (ex: after mutation),
- ✅ Use `invalidateQueries()` after mutations to refresh lists:

```ts
const queryClient = useQueryClient();
queryClient.invalidateQueries(['users']);
```

- ✅ Configure common settings globally via `QueryClient`:
-

```ts
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            refetchOnWindowFocus: false,
        },
    },
});
```

- ✅ Use useMutation with onMutate, onError, onSettled for smooth UX.

```ts
const mutation = useMutation(updateUser, {
    onMutate: async (newData) => {
        await queryClient.cancelQueries(['user', newData.id]);
        const previousData = queryClient.getQueryData(['user', newData.id]);
        queryClient.setQueryData(['user', newData.id], newData);
        return {previousData};
    },
    onError: (err, newData, context) => {
        queryClient.setQueryData(['user', newData.id], context.previousData);
    },
    onSettled: (data, error, variables) => {
        queryClient.invalidateQueries(['user', variables.id]);
    },
});
```

---

### Tailwind CSS

- ✅ Use Tailwind classes directly in JSX.
- ✅ Use IDE extensions like Tailwind IntelliSense for autocomplete and linting
- ✅ Prefer `clsx()` or `classnames()` for conditional classes.
- ✅ Global config is in `tailwind.config.ts`.

```tsx
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Submit
</button>
```

- ✅ Split utilities logically: layout → spacing → typography → colors → effects.
- ✅ Use multi-line classes for long utility chains.

```html

<div
        class="
    flex flex-col items-center justify-center
    p-6 bg-gray-100 text-center
    rounded-lg shadow-md
  "
>
```

---

### Routing (React Router v6+)

- ✅ Routes are defined in `app/router.tsx`.

```tsx
import {createBrowserRouter} from 'react-router-dom';
import LoginPage from '@/features/auth/pages/LoginPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {path: 'login', element: <LoginPage/>},
            // Other routes...
        ],
    },
]);
```

---

## 📜 Scripts

```bash
npm install           # install deps
npm run dev           # start Vite dev server
npm run build         # build for production
npm run lint          # run ESLint
npm run format        # run Prettier
```

---

## 📌 Misc Notes

- Keep Zustand stores **feature-local** unless truly shared
- Use React Query for **all server communication**
- Organize everything by **feature**, not type (no global `components/`)
- Prefer to composition over inheritance
- Use Suspense and Error Boundaries where needed
- Optional: Add testing via Vitest or Jest

---

## ✅ Goal for Copilot

GitHub Copilot should:

- Auto-suggest correct file location based on feature
- Prioritize `useQuery` or Zustand where applicable
- Use Tailwind class patterns
- Suggest `axios` or `fetch` calls within `api.ts`
- Autocomplete hooks with correct naming (`useXyz`)
- Apply consistent folder structure
