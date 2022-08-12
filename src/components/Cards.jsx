import React from "react"

export default function Cards(props) {
    return (
        <div className="card" >
            <img src={`./images/${props.item.imageUrl}`} alt={props.item.title} className="card-img" />
            <div className="card-details" >
                <span className="location"><img src="./images/location.png" alt="location icon" />{props.item.location}</span><a href={props.item.googleMapsUrl} className="anchor" >View on Google Maps</a>
                <h1>{props.item.title}</h1>
                <p><b>{props.item.startDate} - {props.item.endDate}</b></p>
                <p className="card-p" >{props.item.description}</p>
            </div>
            <div className="dots"></div>
        </div> 
    )
}