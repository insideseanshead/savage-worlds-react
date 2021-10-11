import React from 'react'
import { Image, Button, Container } from 'react-bootstrap'
import './style.css'

const Hero = () => {
    return (
        <Container className='hero'>
            <Image className='heroImage' src="http://chinaunlimited.eu/wp-content/uploads/2015/08/0802-Chinese-Dragon.jpg"  />
        </Container>
       
    )
}

export default Hero
