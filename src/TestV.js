import React, { useState } from 'react';
import YTsearch from 'youtube-api-search';
// 유튜브 검색 API
// 할당량 하루에 10,000 쿼리, 요청 한번에 100쿼리 사용
const API_KEY = 'AIzaSyD2dVDkSFK2ogtAH7eGzY6nLa4yHfbRfbE';

function TestV(props) {
  const initalState = { data: null, selectedVide: null, term: null };
  const [video, SetVideo] = useState(initalState);
  const term = 'Love Girl Sick';
  const btn = () => {
    // term은 검색어
    YTsearch({ key: API_KEY, term: term }, (data) => {
      SetVideo({
        data: data, // 검색 결과 상위 5개 불러옴
        selectedVide: data[0], // 첫번째 검색결과
        term: term, // 검색어
      });
    });
    console.log('버튼클릭', video);
  };

  console.log(video);
  return (
    <div>
      <button onClick={btn}>ㅇㅣ벤트버튼</button>
    </div>
  );
}

export default TestV;
