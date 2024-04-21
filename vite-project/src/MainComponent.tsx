import React, { useEffect } from 'react';
import axios from 'axios';

const MainComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/captions',
        params: {
          part: 'snippet',
          videoId: 'M7FIvfx5J10'
        },
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1>New<span>video</span></h1>
      </div>
      <div className="current-videos">
        <p>DADASDASASDASDASDASDAdadasdasSDSDAASD</p>
      </div>
    </div>
  );
};

export default MainComponent;
