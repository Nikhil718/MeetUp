import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import ActivityDashboard from "../../features/activity/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/activity/details/ActivityDetails";
import ActivityForm from "../../features/activity/form/ActivityForm";
import Home from "../../features/home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "activities",
        element: <ActivityDashboard />,
      },
      {
        path: "activities/:id",
        element: <ActivityDetails />,
      },
      {
        path: "createActivity",
        element: <ActivityForm key="create" />,
      },
      {
        path: "manage/:id",
        element: <ActivityForm />,
      },
    ],
  },
]);
