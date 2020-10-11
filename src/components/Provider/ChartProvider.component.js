import React, { useState } from "react";
import Context from "../../context/context";

// state를 모아둔 것을 Provider(store)
// 하위에서 사용 할 state 정의
// 사용할 state를 return
function ChartProvider({ children }) {
  const initialState = {
    chart: "melon",
  };
  const [chart, setChart] = useState(initialState);

  return <Context.Provider value={chart}>{children}</Context.Provider>;
}

export default ChartProvider;
