import React, { createContext, useReducer, useContext } from 'react';

// state를 모아둔 것을 Provider(store)
// 하위에서 사용 할 state 정의
// 사용할 state를 return
const initialState = {
  chart: 'MELON',
  modal: false,
  playlist: false,
  music: {
    loading: false,
    data: null,
    error: null,
  },
  search: {
    name: null,
    videoId: null,
  },
  newsong: {
    loading: false,
    data: null,
    error: null,
  },
  google: {
    logged: false,
    id: null,
    name: null,
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
    case 'GET_NEWSONG':
      return {
        ...state,
        newsong: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case 'GET_NEWSONG_SUCCESS':
      return {
        ...state,
        newsong: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case 'GET_NEWSONG_ERROR':
      return {
        ...state,
        newsong: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    case 'TOGGLE_HOVER':
      return {
        ...state,
        newsong: {
          loading: false,
          data: state.newsong.data.map((data) =>
            data.id === action.id ? { ...data, hover: !data.hover } : data,
          ),
          error: null,
        },
      };
    case 'TOGGLE_PLAYLIST':
      return {
        ...state,
        playlist: !state.playlist,
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
    case 'ON_LOGIN':
      return {
        ...state,
        google: {
          logged: true,
          id: action.id,
          name: action.name,
        },
      };
    case 'ON_LOGOUT':
      return {
        ...state,
        google: {
          logged: false,
          id: null,
          name: null,
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
