import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Api from './Components/Api'
import Home from './Components/Pages/Home'



function App() {
  
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>} />
      </Route>
    )
  )
   

  return (
    <>
     
     <RouterProvider router={myRoute}/>
    </>
  )
}

export default App

