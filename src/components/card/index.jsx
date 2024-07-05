import React from 'react';
import './style.css'

const Card = ({img, username, email, text}) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <img className='card-avatar' src={img} alt="avatar"/>
                <div className='card-initials'>
                    <p className='card-username'>{username}</p>
                    <p className='card-email'>{email}</p>
                </div>
            </div>
            <p className='card-text'>
                {text}
            </p>
        </div>
    );
};

export default Card;