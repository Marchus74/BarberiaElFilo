import { createBrowserRouter } from "react-router-dom"
import MainBarberia from "../components/pages/MainBarberia"
import Error404 from "../components/pages/Error404"
import Login from "../components/pages/Login"
import Tempral from "../components/templates/Tempral"
import MainTurnos from "../components/organisms/MainTurnos"
import MainServicios from "../components/organisms/MainServicios"


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Tempral/>,
    errorElement: <Error404 />,

    children: [
      {
        index: true,
        element: <MainBarberia />,
        
      },
      {
        path: "/servicios",
        element: <MainServicios />,
        
      },
      {
        path: "/turnos",
        element: <MainTurnos />,
        
      }

    ]
  },
  
  {
    path: "/Login",
    element: <Login />,
    
  },
])

export default router