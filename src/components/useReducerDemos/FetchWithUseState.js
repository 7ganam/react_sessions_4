import React, { useEffect, useState } from "react";

function FetchWithUseState() {
  const [Post, setPost] = useState();
  const [Error, setError] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setPost(json);
      })
      .catch(() => {
        setIsLoading(false);
        setError("something went wrong");
      });
  }, []);

  const renderFetchResult = () => {
    if (IsLoading) {
      return <div>loading...</div>;
    } else if (Error) {
      return <div>{Error}</div>;
    } else {
      return <pre>{JSON.stringify(Post, null, 2)}</pre>;
    }
  };

  return (
    <div className="comp">
      <div className="title"> fetch with use state</div>
      {renderFetchResult()}
    </div>
  );
}

export default FetchWithUseState;
