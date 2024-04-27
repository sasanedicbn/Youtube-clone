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


export const fetchVideoDetails = async (ActiveId) => {
  console.log(ActiveId)
  console.log('AAAA')
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/videos',
  params: {
    part: 'contentDetails,snippet,statistics',
    id: ActiveId,
  },
  headers: {
    'X-RapidAPI-Key': "853339e32dmsh484669df916fa96p1fa47cjsn9dbd231055af",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  return response
} catch (error) {
	console.error(error);
}}

export const fetchVideoComments = async (idVideo: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/commentThreads",
    params: {
      part: "snippet",
      videoId: idVideo,
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "853339e32dmsh484669df916fa96p1fa47cjsn9dbd231055af",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const fetchSuggestedVideos = async (idVideo: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      relatedToVideoId: idVideo,
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "853339e32dmsh484669df916fa96p1fa47cjsn9dbd231055af",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};