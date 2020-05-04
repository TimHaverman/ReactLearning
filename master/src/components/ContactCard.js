import React from 'react';

//import ReactDOM from 'react-dom';

function ContactCard(props){
    
    return(
        <div className="contact-card">
            <img src={props.imgUrl} alt="fail"/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}export default ContactCard;