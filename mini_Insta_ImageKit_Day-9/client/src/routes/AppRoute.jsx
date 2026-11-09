import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import CreatePost from "../createUser/ui/Pages/CreatePost";
import Users from "../allUsers/ui/Pages/Users";

const AppRoute = ()=>{
let router = createBrowserRouter([
  {
    path: "/",
    element: <CreatePost/>,
  },
  {
    path:"/allUsers",
    element:<Users/>
  }
])
return  <RouterProvider router={router}/>
}

export default AppRoute;;