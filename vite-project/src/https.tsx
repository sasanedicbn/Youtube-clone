import axios from 'axios';

export  const playListVideos = async () => {
          const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/playlistItems',
            params: {
              playlistId: 'RDZiQo7nAkQHU',
              part: 'snippet',
              maxResults: '50'
            },
            headers: {
              'X-RapidAPI-Key': "853339e32dmsh484669df916fa96p1fa47cjsn9dbd231055af",
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
          
          try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data
          } catch (error) {
            console.error(error);
          }
        };
    
       
      
