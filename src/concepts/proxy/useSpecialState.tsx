import { useEffect, useRef, useState } from "react";
import { State } from "./IState";

export function useSpecialState(state: State) {
  const stateRef = useRef(state);
  const [, reRender] = useState(0);
  const accessedProperties = new Set<keyof State>();

  const snapShot = new Proxy(
    {},
    {
      get(target, key: keyof State, receiver) {
        accessedProperties.add(key);
        return Reflect.get(stateRef.current, key, receiver);
      },
    }
  );

  return [
    snapShot as State,
    (nextState: Partial<State>) => {
      stateRef.current = { ...stateRef.current, ...nextState };
      if (Object.keys(nextState).some((key) => accessedProperties.has(key))) {
        reRender((i) => i + 1);
      }
    },
  ] as const;
}
