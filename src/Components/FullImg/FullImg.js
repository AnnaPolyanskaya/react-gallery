import React from 'react';
import { Link } from 'react-router-dom';
import './FullImg.css';




const FullImg = ({url}) => {
    console.log(url);
    return(
        <div className="fullImg" >
            <Link to="/"><button className='back'>All images</button></Link>
            <img src={url} alt='full width' />
        </div> 
    )
}

export default FullImg;