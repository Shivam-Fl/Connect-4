// GameBoard.jsx
import Circle from "./Circle";
import { useState } from "react";

const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

export default function GameBoard() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("Player 1");

  function counter() {
    if (count < 17) {
      setCount((count) => count + 1);
    }
  }

  function handleText() {
    if (count > 16) {
      return -1;
    } else if (count % 2 !== 0 && count <= 16) {
      setText("Player 2");
    } else if (count <= 16) {
      setText("Player 1");
    }
  }

  function handleWin() {
    // Logic to check for winning condition
    // Example: Check for consecutive blue circles
    for (let i = 1; i < id.length - 3; i++) {
      const circle1 = document.getElementById(i);
      const circle2 = document.getElementById(i + 1);
      const circle3 = document.getElementById(i + 2);
      const circle4 = document.getElementById(i + 3);


      if (
        circle1 &&
        circle2 &&
        circle3 &&
        circle4 &&
        circle1.style.background === "red" &&
        circle2.style.background === "red" &&
        circle3.style.background === "red" &&
        circle4.style.background === "red"
      ) {
        setText("Player 1 won");
        break;
      }
      else if (
        circle1 &&
        circle2 &&
        circle3 &&
        circle4 &&
        circle1.style.background === "blue" &&
        circle2.style.background === "blue" &&
        circle3.style.background === "blue" &&
        circle4.style.background === "blue"
      ) {
        setText("Player 2 won");
        break;
      }
      
    }
    for (let i = 1; i < id.length - 12; i++) {
      const circle1 = document.getElementById(i);
      const circle2 = document.getElementById(i + 4);
      const circle3 = document.getElementById(i + 8);
      const circle4 = document.getElementById(i + 12);


      if (
        circle1 &&
        circle2 &&
        circle3 &&
        circle4 &&
        circle1.style.background === "red" &&
        circle2.style.background === "red" &&
        circle3.style.background === "red" &&
        circle4.style.background === "red"
      ) {
        setText("Player 1 won");
        break;
      }
      else if (
        circle1 &&
        circle2 &&
        circle3 &&
        circle4 &&
        circle1.style.background === "blue" &&
        circle2.style.background === "blue" &&
        circle3.style.background === "blue" &&
        circle4.style.background === "blue"
      ) {
        setText("Player 2 won");
        break;
      }
      for (let i = 1; i < id.length - 5; i++) {
        const circle1 = document.getElementById(i);
        const circle2 = document.getElementById(i + 5);
        const circle3 = document.getElementById(i + 10);
        const circle4 = document.getElementById(i + 15);
  
  
        if (
          circle1 &&
          circle2 &&
          circle3 &&
          circle4 &&
          circle1.style.background === "red" &&
          circle2.style.background === "red" &&
          circle3.style.background === "red" &&
          circle4.style.background === "red"
        ) {
          setText("Player 1 won");
          break;
        }
        else if (
          circle1 &&
          circle2 &&
          circle3 &&
          circle4 &&
          circle1.style.background === "blue" &&
          circle2.style.background === "blue" &&
          circle3.style.background === "blue" &&
          circle4.style.background === "blue"
        ) {
          setText("Player 2 won");
          break;
        }
        
      }
      for (let i = 4; i < id.length - 3; i++) {
        const circle1 = document.getElementById(i);
        const circle2 = document.getElementById(i + 3);
        const circle3 = document.getElementById(i + 6);
        const circle4 = document.getElementById(i + 9);
  
  
        if (
          circle1 &&
          circle2 &&
          circle3 &&
          circle4 &&
          circle1.style.background === "red" &&
          circle2.style.background === "red" &&
          circle3.style.background === "red" &&
          circle4.style.background === "red"
        ) {
          setText("Player 1 won");
          break;
        }
        else if (
          circle1 &&
          circle2 &&
          circle3 &&
          circle4 &&
          circle1.style.background === "blue" &&
          circle2.style.background === "blue" &&
          circle3.style.background === "blue" &&
          circle4.style.background === "blue"
        ) {
          setText("Player 2 won");
          break;
        }
        
      }
      
    }
  }

  function Restart() {
    setCount(1);
    setText("Player 1");
  
    for (let i = 1; i <= 16; i++) {
      const circle = document.getElementById(i);
      if (circle) {
        circle.style.background = "white";
      }
    }
  }

  return (
    <div>
    
    { count > 16 ?<div className="flex flex-col justify-center items-center gap-y-6"><h3 className="text-3xl font-bold font-sans ">Tie</h3> <button className="text-xl  font-sans bg-yellow-300 text-center border-gray-400 rounded-3xl px-6 py-2" onClick={Restart}>Restart</button></div> :(text === "Player 2 won" || text === "Player 1 won")?
    <div className="flex flex-col justify-center items-center gap-y-6">
      <h1 className="text-3xl font-bold font-sans ">{text}</h1>
      <button className="text-xl  font-sans bg-yellow-300 text-center border-gray-400 rounded-3xl px-6 py-2" onClick={Restart}>Restart</button>
      </div>
    :
       <div> <p className="text-xl font-bold font-sans text-center mb-4 ">{text}</p>
      <div className="grid grid-cols-4 gap-4 bg-yellow-300 p-4 rounded-3xl">
        {id.map((items) => (
          <Circle
            key={items}
            id={items}
            count={count}
            counter={counter}
            handleText={handleText}
            handleWin={handleWin}
          />
        ))}
      </div> </div>} 
      
    </div>
  );
}
