import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Content from './Content';
import Header from './Header';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header setSearchQuery={setSearchQuery} />,
      children: [
        { path: '/', element: <Content searchQuery={searchQuery} /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

