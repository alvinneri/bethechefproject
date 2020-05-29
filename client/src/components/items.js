import React from 'react';
import {Link} from 'react-router-dom';

const Items = (props) => {

    const {label, image, ingredients} = props;

    
    return(
        <div className="container-items">
            <p>{label}</p>
            <Link to={{ pathname : `/details/${label}`,
                        state : {
                            label,
                            image,
                            ingredients
                        }
        }}><img src={image} alt={label}/></Link>
        </div>
        
    )
}

export default Items;