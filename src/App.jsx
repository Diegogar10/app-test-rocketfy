import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import BlueTheme from './container/BlueTheme';

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
