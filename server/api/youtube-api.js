const axios = require('axios');

const API_KEY = process.env.GOOGLE_API_KEY;

const getList = function (req, res) {
  const getPlaylist = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLmg2NN6jGpfz2Xjs9b5ZPdPW5VO_F5gA0&part=snippet&maxResults=10&key=${API_KEY}`,
      );
      return response.data;
    } catch (err) {
      console.log('에러', err);
    }
  };
  getPlaylist().then((data) => {
    res.status(200).json(data);
  });
};

module.exports = getList;
