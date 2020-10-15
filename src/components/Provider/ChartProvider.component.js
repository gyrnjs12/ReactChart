import React, { createContext, useReducer, useContext } from "react";

// state를 모아둔 것을 Provider(store)
// 하위에서 사용 할 state 정의
// 사용할 state를 return
  const initialState = {
    chart: "MELON",
  };
  function chartReducer(state, action) {
    switch(action.type) {
      case 'CHANGE_CHART':
        return {
          ...state,
          chart: action.chart
        }
      default:
        throw new Error(`Unhandle action type: ${action.type}`);
    }
  }

  const ChartStateContext = createContext();
  const ChartDispatchContext = createContext();

  export function ChartProvider({children}) {
    const [state, dispatch] = useReducer(chartReducer, initialState);
    return (
      <ChartStateContext.Provider value={state}>
        <ChartDispatchContext.Provider value={dispatch}>
          {children}
        </ChartDispatchContext.Provider>
      </ChartStateContext.Provider>
    );
  }

  // 커스텀 Hook 만들기
  export function useChartState() {
    return useContext(ChartStateContext);
  }

  export function useChartDispatch() {
    return useContext(ChartDispatchContext);
  }
// 다른 컴포넌트에서 import 후
// const state = useChartState(); 이런식으로 사용 가능