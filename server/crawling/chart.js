const axios = require("axios");
const cheerio = require("cheerio"); // node.js에서 JQuery 처럼 DOM seletor의 기능들을 사용할 수 있고, 페이지 파싱 라이브러리

const getMelon = function (req, res) {
  const getChart = async () => {
    try {
      return await axios.get("https://www.melon.com/chart/index.htm"); // 해당 사이트의 HTML태그를 리턴
    } catch (error) {
      console.error(error);
    }
  };
  // getMelon()의 실행이 끝나면 호출되는 then(), 매개변수는 getMelon()의 리턴 값
  getChart().then((html) => {
    let ulList = [];
    const $ = cheerio.load(html.data); // html 문자열을 받아 cheerio 객체로 반환
    // html seletor를 문자열로 받아 cheerio 객체에서 선택된 html에서 해당하는 모든 태그들의 배열을 반환
    const $bodyList = $("div.service_list_song table tbody").children("tr");
    $bodyList.each(function (i, item) {
      ulList[i] = {
        id: i + 1,
        title: $(this).find("div.ellipsis.rank01 span a").text(), // html seletor를 받아 해당하는 태그를 반환
        artist: $(this).find("div.ellipsis.rank02 span a").text(),
        img: $(this).find("a.image_typeAll img").attr("src"),
      };
    });
    res.status(200).json(ulList); // 200(정상응답), 크롤링한 데이터를 json으로 변환
  });
};

const getBugs = function (req, res) {
  const getChart = async () => {
    try {
      return await axios.get("https://music.bugs.co.kr/chart");
    } catch (error) {
      console.error(error);
    }
  };

  getChart().then((html) => {
    let ulList = [];
    const $ = cheerio.load(html.data);
    const $bodyList = $("div#CHARTrealtime table tbody").children("tr");
    $bodyList.each(function (i, item) {
      ulList[i] = {
        rank: i + 1,
        title: $(this).find("p.title a").text(),
        artist: $(this).find("p.artist a").text(),
      };
    });
    console.log(ulList);
    res.status(200).json(ulList); // 200(정상응답), 크롤링한 데이터를 json으로 변환
  });
};

module.exports = { getMelon, getBugs };
