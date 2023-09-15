import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./routes/index";
import { Root } from "./routes/root";
import { NotFound } from "./not-found";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Index /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
