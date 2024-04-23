
import './App.css'
import Content from './Content'
import Header from './Header'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '/', element:<Content/> }      
    ]
  }
]);
function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App
