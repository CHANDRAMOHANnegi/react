import { forwardRef } from "react";
import WithDimension from "./withDimension";

const Comp1 = (props, ref) => {
  return (
    <div ref={ref} className="comp1">
      Hey I am comp1 width: {props.width}
    </div>
  );
};

export default WithDimension(forwardRef(Comp1));
