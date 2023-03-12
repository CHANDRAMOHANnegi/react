

<details>
  <summary>Design Patterns</summary>
  
  ### Hoc Pattern
  1. https://www.youtube.com/watch?v=yepZDprpf0Y&list=PLe3J6mZBq1xVZ-aVma_0GFa2sC-Fwl0J3&ab_channel=JsCafe

  ### Some Code
  ```js
 import { useEffect, useRef, useState } from "react";

  const withDimension = (Element) => {

    function WithDimensions(props) {
      const compRef = useRef();
      const [width, setWidth] = useState(null);
      const [height, setHeight] = useState(null);

      useEffect(() => {
        if (compRef.current) {
          setWidth(compRef.current.offsetWidth);
          setHeight(compRef.current.offsetHeight);
        }
      }, [compRef]);

      return <Element ref={compRef} width={width} height={height} {...props} />;
    }

    return WithDimensions;
  };

  ```
</details>