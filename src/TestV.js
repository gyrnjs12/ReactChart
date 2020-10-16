import React, { useState } from 'react';
import YTsearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD2dVDkSFK2ogtAH7eGzY6nLa4yHfbRfbE';

function TestV(props) {
  const initalState = { data: null, selectedVide: null, term: null };
  const [video, SetVideo] = useState(initalState);
  YTsearch({ key: API_KEY, term: 'Dynamite' }, (data) => {
    SetVideo({
      data: data,
      selectedVide: data[0],
      term: 'Dynamite',
    });
  });
  console.log(video);
  return <div>HELLO</div>;
}

export default TestV;
