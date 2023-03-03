import React, { useCallback, useEffect } from "react";
import { State } from "./IState";
import { useSpecialState } from "./useSpecialState";

const internalState: State = {
  name: "cm",
  username: "negi",
  isCool: true,
};

export const Proxy = (props: any) => {
  const [state, setState] = useSpecialState(internalState);

  useEffect(() => {
    setState({ isCool: false });
  }, []);

  return (
    <>
      <div>hello h l hello</div>
      <div>{state.name}</div> is
      <div>{state.isCool ? "cool" : "not cool"}</div>
      <h1>{state.username}</h1>
    </>
  );
};
