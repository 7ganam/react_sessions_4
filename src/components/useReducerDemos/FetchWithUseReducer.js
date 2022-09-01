import React, { useReducer, useEffect } from "react";

const initState = {
  Post: "",
  Error: "",
  IsLoading: false,
};

const reducer = (oldState, action) => {
  switch (action.type) {
    case "SEND_REQUEST":
      return { ...oldState, IsLoading: true, Error: "" };
    case "REQUEST_SUCCESS":
      return { Post: action.payload, IsLoading: false, Error: "" };
    case "REQUEST_FAILURE":
      return { Post: "", IsLoading: false, Error: action.payload };
    default:
      return oldState;
  }
};

function FetchWithUseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    // setIsLoading(true);
    dispatch({ type: "SEND_REQUEST" });
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        // setIsLoading(false);
        // setPost(json);
        dispatch({ type: "REQUEST_SUCCESS", payload: json });
      })
      .catch(() => {
        // setIsLoading(false);
        // setError("something went wrong");
        dispatch({ type: "REQUEST_FAILURE", payload: "something went wrong" });
      });
  }, []);

  const renderFetchResult = () => {
    if (state.IsLoading) {
      return <div>loading...</div>;
    } else if (state.Error) {
      return <div>{state.Error}</div>;
    } else {
      return <pre>{JSON.stringify(state.Post, null, 2)}</pre>;
    }
  };

  return (
    <div className="comp">
      <div className="title"> fetch with use reducer</div>
      {renderFetchResult()}
    </div>
  );
}

export default FetchWithUseReducer;
