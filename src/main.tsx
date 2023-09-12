import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DiaryPage from "./pages/diary/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DiaryDetail from "./pages/diary/detail.tsx";
import DiaryCreate from "./pages/diary/create.tsx";
import DiaryEdit from "./pages/diary/edit.tsx";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "always",
      staleTime: 1000 * 60 * 60,
    },
    mutations: {
      networkMode: "always",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "diary",
        element: <DiaryPage />,
      },
      {
        path: "diary/:id",
        element: <DiaryDetail />,
      },
      {
        path: "form",
        element: <DiaryCreate />,
      },
      {
        path: "edit/:id",
        element: <DiaryEdit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
