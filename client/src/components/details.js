import React from 'react';

const Details = (props) => {

    const {label, image, ingredients} = props.location.state;
    
    return (
        <div className="container-details">
            <img src={image} alt=""/>
            <h4>{label}</h4>  
            <ul>
                    {
                        ingredients.map( ing => (
                            <li>{ing.text}</li>
                        ))
                    }
            </ul>
            
        </div>
    )
}

export default Details;