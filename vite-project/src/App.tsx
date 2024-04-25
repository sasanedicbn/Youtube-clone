import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Content from './Content';
import Header from './Header';
import SingleVideo from './SingleVideo';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeId, setActiveId] = useState(null)

  function getActiveId (id) {
    setActiveId(id)
  }
  console.log('APPPP IDDD', activeId)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header setSearchQuery={setSearchQuery} />,
      children: [
        { path: '/', element: <Content searchQuery={searchQuery} getActiveId={getActiveId} /> },
        { path: '/video/:id', element: <SingleVideo activeId={activeId}/>},
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

