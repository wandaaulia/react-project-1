import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button} from 'react-bootstrap';

export default function CarouselMenu() {
    return (
        <Container fluid className="bg-dark p-5" style={{height:"50vh"}}>
        <div className="p-5"> 
            <h1 className="text-white "> The Tour </h1>
            <p className="text-white "> Find your favorite destinity </p>
            <Button variant="light mt-2"> Explore </Button> 
            </div> 
        </Container>
    )
}
