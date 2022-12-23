import About from "../../components/About/About";
import Name from "../../components/Name/Name";
import './HomePage.scss'
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Prortfolio/Portfolio";
import Contacts from "../../components/Contacts/Contacts";
const HomePage = () => {
    return (
        <div className='home'>
            <Name/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
        </div>
    )
}
export default HomePage