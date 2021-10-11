import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const TargetCalculator = () => {
    // Set Target Number
    const [target, setTarget] = useState('4')
    //On Change Event
    const onChange = (e) => {
        setTarget(e)
    }
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Target Number</Form.Label>
          <Form.Control type="number" value={target} onChange={(e)=>onChange(e.target.value)} />
          <Form.Text className="text-muted">
            Enter target for roll here.
          </Form.Text>
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default TargetCalculator
