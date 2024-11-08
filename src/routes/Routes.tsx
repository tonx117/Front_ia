import { Route, Routes as RouterRoutes } from "react-router-dom";
import { App } from "../App";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ChatPage } from "../pages/ChatPage";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/chat",
    element: <ChatPage />
  }
];

export const RoutesComponent = () => {
  return (
    <RouterRoutes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </RouterRoutes>
  );
};
