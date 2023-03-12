import { forwardRef } from "react";
import WithDimension from "./withDimension";

const Comp2 = (props, ref) => {
  return (
    <div ref={ref} className="comp2">
      Hey I am comp2 width: {props.width}
    </div>
  );
};

export default WithDimension(forwardRef(Comp2));
