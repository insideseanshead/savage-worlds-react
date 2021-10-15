import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";

const DiceRoller = () => {
  // Set State
  const [roll, setRoll] = useState(0);
  
  // Set Dice Variables
  const d4 = 4;
  const d6 = 6;
  const d8 = 8;
  const d10 = 10;
  const d12 = 12;

  // Create dice logic dice explode on max
  const rollDice = (dice) => {
    // character stat die
    let statData = [];
    let charRoll = 0;
    // wild die
    let wildData = [];
    let wildRoll = 0;
    // Character roll
    
    for (let i = 0; charRoll === i * dice; i++) {
      charRoll = charRoll + Math.ceil(Math.random() * dice);
      statData.push(charRoll);
      console.log(statData);
    }
    // Wild Roll
    for (let i = 0; wildRoll === i * 6; i++) {
      wildRoll = wildRoll + Math.ceil(Math.random() * 6);
      wildData.push(wildRoll);
      console.log(wildData);
    }
    // Pick highest number
    if (charRoll >= wildRoll) {
      return charRoll;
    } else if (charRoll < wildRoll) {
      return wildRoll;
    } else {
      return "Crit Fail";
    }
  };

  

  return (
    <Card id="diceRollerCard">
      <Card.Body>
        <Card.Title>Dice</Card.Title>
        <div className="diceButtons">
          <Button onClick={() => rollDice(d4)} variant="warning" id="rollD4" className="rollButton">
            D4
          </Button>
          <Button variant="warning" id="rollD6" className="rollButton">
            D6
          </Button>
          <Button variant="warning" id="rollD8" className="rollButton">
            D8
          </Button>
          <Button variant="warning" id="rollD10" className="rollButton">
            D10
          </Button>
          <Button variant="warning" id="rollD12" className="rollButton">
            D12
          </Button>
        </div>
        <div className="rolledNumber">{roll}</div>
      </Card.Body>
    </Card>
  );
};

export default DiceRoller;
