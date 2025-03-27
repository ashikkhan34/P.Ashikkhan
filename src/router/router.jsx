import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../MainlayOut/MainlayOut";
import Home from "../Page/Home/Home";
import ProjectDetails from "../Components/ProjectDetails/ProjectDetails";
import AllProjects from "../Components/AllProjects/AllProjects";
import AboutUs from "../Page/AboutUs/AboutUs";
import Contact from "../Page/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainlayOut></MainlayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'aboutUs',
          element:<AboutUs></AboutUs>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
        {
          path:'allProjects',
          element:<AllProjects></AllProjects>
        },
        {
          path:'projectDetails/:id',
          element:<ProjectDetails></ProjectDetails>,
        }
      ]
    },
  ]);

  export default router;