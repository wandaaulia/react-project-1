import React, {useState, useEffect} from 'react'
import Tours from './Tours'


export default function Home() {

    const [loading, setLoading] = useState(true);
    const [tours, setTour] = useState([]);
    

    const url = 'https://course-api.com/react-tours-project';


    const deleteTour = (id) => {
        const newTour = tours.filter((tour) => tour.id !== id);
        setTour(newTour);
    }

    const fetchData = async() => {
        setLoading(true);

        try {
            const request = await fetch(url);
            const response = await request.json();

            setTour(response);
            setLoading(false);
        } catch(error) {
            setLoading(false);
            console.log(error);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);


    return (
        <section> 
        { loading && <p> loading ... </p>}
        { !loading && 
        <div>
            <Tours tours={tours} deleteTour={deleteTour}/>
        </div>
        }
        </section>
    )
}
