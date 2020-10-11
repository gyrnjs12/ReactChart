import { createContext } from "react";

const Context = createContext({
  // 관리할 state 정의
  // 단순히 관리할 state가 무엇이 있는지 확인용
  // 없어도 되는 데이터들임
  chart: "melon",
});

export default Context;
