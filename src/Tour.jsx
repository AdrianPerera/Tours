import React from 'react';

const Tour = ({name,info,image,price}) => {
    return (
        <div className="single-tour">

            <img src={image} alt={name}/>
            <div>{name}</div>
            <div className="tour-info">{info}</div>
            <div className="tour-price">{price}</div>

        </div>
    );
};

export default Tour;