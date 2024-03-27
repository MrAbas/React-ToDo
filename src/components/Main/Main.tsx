import { Header } from "../Header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CommentsAsync } from "../../pages/CommentsAsync";
import NotFoundPage from "../../pages/NotFoundPage";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoListAsync } from "../../pages/ToDoListAsync";
import styles from "./main.module.scss";

export const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      /*  children: [
        {
          path: "/todo",
          element: <ToDoList />,
          errorElement: <NotFoundPage />,
        },
      ], */
      errorElement: <NotFoundPage />,
    },
    {
      path: "/todo",
      element: <ToDoList />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/comments",
      element: <CommentsAsync />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/ProfilePages/3",
      element: <ToDoListAsync />,
      errorElement: <NotFoundPage />,
    },
  ]);

  return (
    <main className={`${styles.main}`}>
      <RouterProvider router={router} />
    </main>
  );
};
