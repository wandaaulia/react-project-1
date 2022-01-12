import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button} from 'react-bootstrap';


export default function Tour({id, name, price, info, image, deleteTour}) {
    return (
         <div className='col-md-3 mt-2 mb-3'> 
            <Card className="box h-100">
            <Card.Img variant="top" src={image} style={{height:"15rem"}}/>
            <Card.Body>
                <Card.Title className=" p-3">{name} </Card.Title>
                <Card.Text>
                {info.substring(0, 100)}
                </Card.Text>
            <Button variant="primary"> Read More</Button> {''}
            <Button variant="dark" onClick={deleteTour.bind(this, id)} className="ml-2"> Not Interested </Button>
        </Card.Body>
        </Card>
        </div>
       
    )
}
