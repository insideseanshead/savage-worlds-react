import React, {useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

const TargetCalculator = () => {
    // Set Target Number
    const [target, setTarget] = useState(4)
    //On Change Event
    const onChange = (e) => {
        setTarget(parseInt(e, 10))
    }
    // Function to set Array 
    const hitCalculator = () => {
        let data = [];
        let number = target
        for( let i=0 ; i<3; i++){
            number = number+4
            data.push(number)
        }
        return data
    }
    const hitLevel = hitCalculator()

    console.log(hitLevel)
    
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Target Number</Form.Label>
          <Form.Control type="number" value={target} onChange={(e)=>onChange(e.target.value)} />
        </Form.Group>
        
        <ul className="targetList">
          {
            hitLevel.map(function(level,i){
              return <li key={i}>{level}</li>
            })
          }
        </ul>
        
      </Form>
    )
}

export default TargetCalculator
