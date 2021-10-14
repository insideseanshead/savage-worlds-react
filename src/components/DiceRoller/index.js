import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './style.css'

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
        let rolled = Math.ceil(Math.random()*dice) 
        console.log(rolled)
        let reRolled = 1;
        if(rolled === dice || reRolled === dice) {
            reRolled = Math.ceil(Math.random()*dice)
            console.log(reRolled)
            rolled = rolled + reRolled;
        } else {
            return rolled
        }
    }
    console.log(rollDice(d4))
   
    
    return (
        <Card id='diceRollerCard'>
            <Card.Body>
                <Card.Title>Dice</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default DiceRoller
