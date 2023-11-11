import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Circle({ count, counter, handleText, handleWin, id }) {
  const [color, setColor] = useState("white");

  useEffect(() => {
    handleWin(); // Call handleWin after the state has been updated
  }, [color, handleWin]);

  function colorChange() {
    if (count > 16) {
      setColor("white")
      return -1;
    } else if (count % 2 !== 0 && count <= 16) {
      setColor("red");
    } else if (count <= 16) {
      setColor("blue");
    }
  }

  function handleClick() {
    colorChange();
    counter();
    handleText();
  }

  return (
    <div
      className="rounded-full w-14 h-14 border border-gray-600"
      style={{ background: color }}
      onClick={handleClick}
      id={id}
    ></div>
  );
}

Circle.propTypes = {
  count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  counter: PropTypes.func.isRequired,
  handleText: PropTypes.func.isRequired,
  handleWin: PropTypes.func.isRequired
};
