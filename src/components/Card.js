import React from 'react'
import star from '../assets/star-red.svg'

function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "sold out"
    } else if (props.item.location === 'Online') {
        badgeText = "online"
    }

    return (
        <div className='card'>
            <div className='card-section'>
                {badgeText && <p className='card-tag'>{badgeText}</p>}
                <img src={props.item.coverImg} alt="katie" />
                <div className='card-text'>
                    <div className='card-rating'>
                        <img src={star} alt="airbnb-star" />
                        <p>{props.item.stats.rating}</p>
                        <p className='rating-details'>({props.item.stats.reviewCount})・{props.item.location}</p>
                    </div>
                    <p className='card-title'>{props.item.title}</p>
                    <p><strong>From ${props.item.price}</strong> / person</p>
                </div>
            </div>

        </div>
    )
}

export default Card