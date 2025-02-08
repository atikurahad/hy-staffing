import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home"
import Main from "../layouts/Main";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import LoginPage from "../pages/LoginPage.jsx";

const routes = createBrowserRouter([

{
  path: '/',
  element: <Main />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path:"registration",
      element : <RegistrationPage />
    },
    {
      path:"jobs",
      element : <LoginPage></LoginPage>
    },
    {
      path:"contact",
      element : <RegistrationPage />
    }
  ]
}

]);

export default routes;