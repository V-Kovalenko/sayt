import React from 'react';
import './Contacts.scss'
import contacts from '../../assets/img/contacts/contacts.svg'

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className="contacts__title title">Contacts</div>
            <div className="contacts__text">Want to know more or just chat?<br/> You are welcome!</div>
            <button className="contacts__button">Send message</button>
            <div className="contacts__img">
                <img src={contacts} alt="contacts"/>
            </div>
            <div className="contacts__like">Like me on <br/> LinkedIn, Instagram, Behance, Dribble</div>
        </div>
    );
};

export default Contacts;