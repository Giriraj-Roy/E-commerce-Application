import React from 'react';
import './ShowDetails.css';

const ShowDetails = ( {key, item}) => {

    return (
        <React.Fragment>
            <div className='detailContainer'>
                <div className='heading'>
                    <h1>{item.title}</h1>
                </div>
                {/* <hr></hr> */}
                <br></br>
                <br></br>
                <div className='detailsPane'>
                    <div className='detailsImg'>
                        {<img src={`${item.image}`} alt="product" width="400" height="500" />}
                    </div>
                    <div className='description'>
                        <div className='detailsDescription'>
                            {item.description}
                        </div>
                        <br></br>                    
                        <div className="detailsPrice"><strong>Price : $ {item.price} </strong></div>
                        
                        {/* <div className='rating'>
                            <h4>Rating : </h4>{item.rating.rate}
                            <br></br>
                            <h4>Reviews : </h4> {item.rating.count}
                        </div> */}
                        <br></br><br></br>
                        <div>
                            <button className='buy'>Buy Now</button>
                        </div>
                        <br></br>
                        <div>
                            <button className='Addtocartbutton'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>            
        </React.Fragment>
    )
}

export default ShowDetails
