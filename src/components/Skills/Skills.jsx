import React from 'react';
import './Skills.scss'
import Ae from '../../assets/img/skills/Ae.png'
import Ai from '../../assets/img/skills/Ai.png'
import Ps from '../../assets/img/skills/Ps.png'
import figma from '../../assets/img/skills/figma.png'

const Skills = () => {
    return (
        <div className='skills'>
            <div className="skills__title title" id='skills'>Skills</div>
            <div className="skills_text">I work in such programs as</div>
            <div className="skills__img">
                <img src={Ps} alt="PS"/>
                <img src={Ai} alt="Ai"/>
                <img src={Ae} alt="Ae"/>
                <img src={figma} alt="figma"/>
            </div>
        </div>
    );
};

export default Skills;