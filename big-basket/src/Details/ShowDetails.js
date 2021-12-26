import React from 'react';
import './ShowDetails.css';

const ShowDetails = ( {key, item}) => {

    const hikedPrice = ((item.price + (0.1 * item.price))*75).toFixed(2);
    // console.log(hikedPrice);
    const itemPrice = (item.price * 75).toFixed(2);
    const discountedPrice = ((0.1 * item.price)*75).toFixed(2) ;
    


    return (
        <React.Fragment>
            <div className='header'>
                    <div className='headingFirst'>
                        <div style={{ margin: '15px' }}>{item.title}</div>
                        <div className='priceFirst'>
                            <div className='hiked'> ₹ <del>{hikedPrice}</del> </div>
                            
                            <div className='discount'> Saved ₹ {discountedPrice} </div>
                        </div>
                        <div className='total'> Total Price : ₹ {itemPrice}</div>
                        <div className='addtocartFirst'>
                            <div style={{margin: 'auto' }}>Add To Cart</div>
                        </div>
                    </div>
                    
            </div>
            <div className='detailContainer'>
                
                {/* <hr></hr> */}
                <br></br>
                <br></br>
                <div className='detailsPane'>
                    <div className='detailsImg'>
                        {<img src={`${item.image}`} alt="product" width="400" height="500" />}
                    </div>
                    {/* <div>
                            <button className='buy'>Buy Now</button>
                        </div>
                        <br></br>
                        <div>
                            <button className='Addtocartbutton'>Add To Cart</button>
                    </div> */}
                    <div className='description'>
                        <div className='detailsDescription'>
                            <h2>{item.title}</h2>
                            {item.description}
                        </div>
                        <br></br>                    
                        {/* <div className="detailsPrice"><strong>Price : ₹ {itemPrice} </strong></div> */}
                        
                        {/* <div className='rating'>
                            <h4>Rating : </h4>{item.rating.rate}
                            <br></br>
                            <h4>Reviews : </h4> {item.rating.count}
                        </div> */}
                        <br></br><br></br>
                        {/* <div>
                            <button className='buy'>Buy Now</button>
                        </div>
                        <br></br>
                        <div>
                            <button className='Addtocartbutton'>Add To Cart</button>
                        </div> */}
                    </div>
                    
                </div>
                <div>
                            <button className='buy'>Buy Now</button>
                        </div>
                        <br></br>
                        <div>
                            <button className='Addtocartbutton'>Add To Cart</button>
                        </div>
            </div>            
        </React.Fragment>
    )
}

export default ShowDetails
