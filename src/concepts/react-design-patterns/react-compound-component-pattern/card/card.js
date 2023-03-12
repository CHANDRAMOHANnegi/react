import { createContext, useContext, useState } from "react";
// import "./Card.css";
import "./card.css";

// Context (Scope)
var CardContext = createContext();

function useCardContext() {
  var context = useContext(CardContext);

  if (!context) {
    throw new Error(
      "Child components of Card cannot be rendered outside the Card component!"
    );
  }

  return context;
}

// Card component (main/parent component)
function Card({ children }) {
  var [toggled, setToggled] = useState(false);

  return (
    <CardContext.Provider value={{ toggled, setToggled }}>
      <div className={toggled ? "Card Card--highlight" : "Card"}>
        {children}
      </div>
    </CardContext.Provider>
  );
}

// Heading component (sub component)
function Heading({ children }) {
  var { toggled } = useCardContext();

  return (
    <h2
      className={
        toggled ? "Card__heading Card__heading--highlight" : "Card__heading"
      }
    >
      {children}
    </h2>
  );
}
Card.Heading = Heading;

// Button component (sub component)
function Button({ children }) {
  var { setToggled } = useCardContext();

  return (
    <button
      className="Card__button"
      onClick={() => setToggled((prev) => !prev)}
    >
      {children}
    </button>
  );
}
Card.Button = Button;

// Image component (sub component)
function Image({ src, alt, type }) {
  useCardContext();

  return (
    <img
      className={`Card__image${type ? " Card__image--" + type : ""}`}
      src={src}
      alt={alt}
    />
  );
}
Card.Image = Image;

export default Card;
