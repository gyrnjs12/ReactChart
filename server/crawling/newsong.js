const axios = require('axios');
const cheerio = require('cheerio'); // node.js에서 JQuery 처럼 DOM seletor의 기능들을 사용할 수 있고, 페이지 파싱 라이브러리

const getNewSong = (req, res) => {
  const getAlbum = async () => {
    try {
      return await axios.get('https://www.melon.com/#');
    } catch (error) {
      console.log(error);
    }
  };

  getAlbum().then((html) => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $(
      'div#conts div.new_album div div.list_wrap ul.sub_list',
    ).children('li');
    $bodyList.each((i, item) => {
      ulList[i] = {
        id: i + 1,
        title: $(item).find('dl dt span.none').text(),
        artist: $(item).find('dl dd.singer a.play_artist.mlog').text(),
        img: $(item).find('dd.img span.thum img').attr('src'),
      };
    });
    console.log(ulList);
    ulList = ulList.slice(0, 12);
    res.status(200).json(ulList);
  });
};

module.exports = getNewSong;
