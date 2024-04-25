import axios from 'axios';

export const fetchVideosList = async (searchValue: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: searchValue,
      part: "snippet,id",
      maxResults: "24",
      regionCode: "US",
    },
    headers: {
      "X-RapidAPI-Key": "853339e32dmsh484669df916fa96p1fa47cjsn9dbd231055af",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};


export const fetchVideoDetails = async () => {
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/videos',
  params: {
    part: 'contentDetails,snippet,statistics',
    id: 'JiDeN4h6eQk'
  },
  headers: {
    'X-RapidAPI-Key': "853339e32dmsh484669df916fa96p1fa47cjsn9dbd231055af",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log('iz funkcije',response.data);
} catch (error) {
	console.error(error);
}}

fetchVideoDetails()