import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
function Test(props) {
  const [data, setData] = useState(null);
  const getPlaylist = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLmg2NN6jGpfz2Xjs9b5ZPdPW5VO_F5gA0&part=snippet&maxResults=10&key=${API_KEY}`,
      );
      setData(response.data);
    } catch (err) {
      console.log('에러', err);
    }
  };
  useEffect(() => {
    getPlaylist();
  }, []);
  console.log('test:', data);
  return <div>TEST Coponent</div>;
}

export default Test;
