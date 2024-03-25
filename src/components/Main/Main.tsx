import { Header } from "../Header/Header";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { CommentsAsync } from "../../pages/CommentsAsync";
import NotFoundPage from "../../pages/NotFoundPage";
import { ToDoList } from "../ToDoList/ToDoList";
import ProfilePages from "../../pages/ProfilePages";
import ProfilePage from "../../pages/ProfilePage";
import { ToDoListAsync } from "../../pages/ToDoListAsync";
import styles from "./main.module.scss";

export const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProfilePages />,
      children: [
        { path: "/ProfilePages/:profileId", element: <ProfilePage /> },
      ],
      errorElement: <NotFoundPage />,
    },
    {
      path: "/ProfilePages/1",
      element: <ToDoList />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/ProfilePages/2",
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
      <Header />
      <RouterProvider router={router} />
    </main>
  );
};
