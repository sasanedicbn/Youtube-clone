import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Content from './Content';
import Header from './Header';
import SingleVideo from './SingleVideo';
import Channel from './Channel';
import { fetchVideosList } from './https';

const App = () => {
  const [clickedCategory, setClickedCategory] = useState('Home')
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const videosData = await fetchVideosList(clickedCategory);
          setVideos(videosData.items);
        };
        fetchData();
      }, [clickedCategory]);
    
   

    function updateClickedCategory(clickedName:string){
        setClickedCategory(clickedName)
    }

  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header setVideos={setVideos} />,
      children: [
        { path: '/', element: <Content  updateClickedCategory={updateClickedCategory} videos={videos}/> },
        { path: '/video/:id', element: <SingleVideo/>},
        { path: '/channel/:id', element: <Channel/>}
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

