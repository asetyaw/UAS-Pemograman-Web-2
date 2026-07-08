import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import GuildHallPage from "@/pages/GuildHallPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import QuestDetailPage from "@/pages/QuestDetailPage";
import CreateQuestPage from "@/pages/CreateQuestPage";
import MyQuestPage from "@/pages/MyQuestPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <GuildHallPage />,
      },
      {
        path: "/create-quest",
        element: <CreateQuestPage />,
      },
      {
        path: "/my-quests",
        element: <MyQuestPage />,
      },
      {
        path: "/quests/:id",
        element: <QuestDetailPage />,
      },
    ],
  },
]);

export default router;