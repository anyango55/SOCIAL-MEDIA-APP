// import login from "./pages/login/login";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar"
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { Navigate } from "react-router-dom";
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import Leftbar from "./components/leftbar/Leftbar";
// import Rightbar from "./components/rightbar/Rightbar";

function App() {

  const currentUser = true;

  const {darkMode} = useContext(DarkModeContext)

  console.log(darkMode)

  const Layout = ()=>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Navbar/>
            <div style={{display:"flex"}}>
              <Leftbar />
              {/* <LeftBar /> */}
              <div style={{flex: 6}}>
                <Outlet />
              </div>
              
              {/* <RightBar /> */}
              <Rightbar />

            </div>
      </div>
    );
  };

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: 
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"profile/:id",
          element:<Profile/>
        },
        {
          path:"/",
          element:<Home/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
