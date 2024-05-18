import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTER from "./routes/routes"
import "./App.css"
function App() {

  const router = createBrowserRouter(ROUTER)
  return (
    <>

    <RouterProvider router={router}/>

    </>
  )
}

export default App
