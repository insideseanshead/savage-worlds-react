import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./style.css";

const TargetCalculator = () => {
  // Set Target Number
  const [target, setTarget] = useState(4);
  //On Change Event
  const onChange = (e) => {
    setTarget(parseInt(e, 10));
  };
  // Function to set Array
  const hitCalculator = () => {
    let data = [];
    let number = target;
    for (let i = 0; i < 10; i++) {
      number = number + 4;
      data.push(number);
    }
    return data;
  };
  const hitLevel = hitCalculator();

  const targets = document.querySelectorAll(".targetNumber");

  console.log(hitLevel);

  return (
    <div className="targetNumberCalculator">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Target Number</Form.Label>
          <br />
          <Form.Control
            type="number"
            value={target}
            onChange={(e) => onChange(e.target.value)}
          />
        </Form.Group>
      </Form>
      <ul className="targetList">
          {hitLevel.map((level, i) => (
            <li key={i} className="targetList" id={i}>
              {i + 1}: <span className="targetNumber">{level}</span>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default TargetCalculator;
