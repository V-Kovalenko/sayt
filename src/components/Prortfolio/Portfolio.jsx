import React from 'react';
import './Prortfolio.scss'
import fashion from '../../assets/img/portfolio/fashion.svg'
import reebok from '../../assets/img/portfolio/reebok.svg'
import braun from '../../assets/img/portfolio/braun.svg'
const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className="portfolio__title title" id='portfolio'>Portfolio</div>
            {/*-----------*/}
            <div className="portfolio__fashion">
                <img src={fashion} alt="fashion" className="portfolio__fashion-img"/>
                <a className='portfolio__link-fashion' target='_blank' href="https://fabstore.ru/?utm_referer=geoadv_direct&utm_ya_campaign=198768938621&yabizcmpgn=5442328&utm_source=geoadv_direct&utm_candidate=1626588812&utm_content=%7Bad_id%7D&_openstat=ZGlyZWN0LnlhbmRleC5ydTs3MzAyOTIyOTsxMjkzNDQwNjc4MDt5YW5kZXgucnU6cHJlbWl1bQ&yclid=2316204105973891071">Online fashion store - Homepage</a>
            </div>
            {/*---------*/}
            <div className="portfolio__reebok">
                <img className='portfolio__reebok-img' src={reebok} alt="reebok"/>
                <a className='portfolio__link-reebok' target='_blank' href="https://www.lamoda.ru/bg/39/brand-group-reebok/?display_locations=all&utm_source=YDirect&utm_medium=cpc&utm_campaign=34677460.Brand%20Reebok%20regions&utm_content=3314077183&utm_term=13149333660.reebok&adjust_tracker=fk2tk4_56bkkg&adjust_campaign=Brand%20Reebok%20regions&adjust_adgroup=3314077183&adjust_creative=13149333660.reebok&_openstat=ZGlyZWN0LnlhbmRleC5ydTszNDY3NzQ2MDs1NzAyMjcyNTI0O3lhbmRleC5ydTpwcmVtaXVt&yclid=1878182576339288063">Reebok Store - Concept</a>
            </div>
            {/*------------*/}
            <div className="portfolio__braun">
                <img className='portfolio__braun-img' src={braun} alt="braun"/>
                <a className='portfolio__link-braun' target='_blank' href="https://braun-russia.ru/">Reebok Store - Concept</a>
            </div>
        </div>
    );
};

export default Portfolio;