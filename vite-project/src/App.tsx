
import './App.css'
import Header from './Header'
import MainComponent from './MainComponent'
import SideBar from './SideBar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '/', element:<div className='main'><SideBar /> <MainComponent/> </div> }      
    ]
  }
]);
function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App
