import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import BlueTheme from './templates/BlueTheme';
import Category from './pages/Category';
import Detail from './pages/Detail';

const router = createBrowserRouter([
  {
    path:"/",
    element:<BlueTheme/>,
    errorElement: <NotFound/>,
    children: [
      {
        path:'',
        element:<Home/>,
      },
      {
        path:"login",
        element: <Login/>
      },
      {
        path:"profile",
        element: <Profile/>
      },
      {
        path:"favorites",
        element: <Favorites/>
      },
      {
        path:"category/:name",
        element: <Category/>
      },
      {
        path:"category/:name/detail/:id",
        element: <Detail/>,
      }
    ]
  },
  
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
