import React, {useEffect, useState} from 'react';
import './Name.scss'
import photo from '../../assets/img/name/photo.jpg'
const Name = () => {
    const [active, setActive1] = useState(false)

    return (
        <div className='name'>
            <div className="name__header ">
                <h1 className="name__my-name">Denis Novik</h1>
                <div className="name__personal-data personal-data">
                    <div className="personal-data__ui-designer">
                        UX | UI designer
                    </div>
                    <div className="personal-data__age">
                        24 years old, Minsk
                    </div>
                </div>
                <div className="name__language language">
                    <div className='language__ru' >RU</div>
                    <span className="language__band"/>
                    <div className="language__eng">ENG</div>
                </div>
            </div>
            <div className="name__photo">
                <img src={photo} alt=""/>
            </div>
        </div>
    );
};

export default Name;