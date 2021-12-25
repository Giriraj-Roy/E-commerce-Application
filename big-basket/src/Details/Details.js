import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ShowDetails from './ShowDetails';

const Details = ( /*{key, item}*/ ) => {
    const { id } = useParams();

    const [details, setDetails] = useState([]);

    useEffect( () => {
        const fetchDetails = async () => {
            const result = await axios(`https://fakestoreapi.com/products/${id}`);
            setDetails(result.data);
            console.log(result.data);
        }
        fetchDetails();
    },[id])

    return (
        <React.Fragment>
            <div>
                <br></br>
               {/* <h1>Hello From Details {id}</h1> */}
                <ShowDetails key={id} item={details}/>
            </div>
            {/* {item.img}  */}
        </React.Fragment>
    )
}

export default Details
