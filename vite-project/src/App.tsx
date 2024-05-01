import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Content from './Content';
import Header from './Header';
import SingleVideo from './SingleVideo';
import Channel from './Channel';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header setSearchQuery={setSearchQuery} />,
      children: [
        { path: '/', element: <Content searchQuery={searchQuery}/> },
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

