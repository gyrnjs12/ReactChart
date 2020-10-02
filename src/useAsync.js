import React, { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "error":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandle action type: ${action.error}`);
  }
}

// API 요청함수, deps를 인자로 받음
function useAsync(callback, deps = []) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", e });
    }
  };
  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData]; // 상태와 함수 반환(데이터 리로딩을 위해)
}

export default useAsync;
