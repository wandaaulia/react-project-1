import Tour from './Tour';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Tours = ({tours, deleteTour}) => {

    console.log(tours);

return (  
        <>
        <h3 className="mt-5"> Tours </h3> 
        <div className='container d-flex justify-content-center h-100 mb-2'> 
        <div className='row mt-5'>
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} deleteTour={deleteTour}/>
            })}
        </div>
        </div>
        </>
    );
}
 
export default Tours;