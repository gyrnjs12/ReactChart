import React, { createContext, useReducer, useContext } from 'react';

// state를 모아둔 것을 Provider(store)
// 하위에서 사용 할 state 정의
// 사용할 state를 return
const initialState = {
  chart: 'MELON',
  modal: false,
  music: {
    loading: false,
    data: null,
    error: null,
  },
  search: {
    name: null,
    videoId: null,
  },
};
function chartReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_CHART':
      return {
        ...state,
        chart: action.chart,
      };
    case 'GET_CHART':
      return {
        ...state,
        music: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case 'GET_CHART_SUCCESS':
      return {
        ...state,
        music: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case 'GET_CHART_ERROR':
      return {
        ...state,
        music: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        modal: false,
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: true,
        search: {
          name: action.name,
          videoId: action.id,
        },
      };
    default:
      throw new Error(`Unhandle action type: ${action.type}`);
  }
}

const ChartStateContext = createContext();
const ChartDispatchContext = createContext();

export function ChartProvider({ children }) {
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
