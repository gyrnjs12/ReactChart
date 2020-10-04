import React from "react";
import styled from "styled-components";
import ChartItem from "./ChartItem";
import { useAsync } from "react-async";
import axios from "axios";

async function getMelon() {
  const response = await axios.get("http://localhost:3002/chart/melon");
  return response.data;
}

const ChartListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 78px; /* 위아래 20, 양옆 32 */
`;

function ChartList() {
  const { data, error, isLoading } = useAsync({
    promiseFn: getMelon,
  });
  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러!</div>;
  console.log(data[0].img);
  return (
    <ChartListBlock>
      {data.map((music) => (
        <ChartItem
          rank={music.id}
          imgPath={music.img}
          music={music.title}
          artist={music.artist}
        />
      ))}
    </ChartListBlock>
  );
}

export default React.memo(ChartList);
