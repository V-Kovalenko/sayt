import About from "../../components/About/About";
import Name from "../../components/Name/Name";
import './HomePage.scss'
import Skills from "../../components/Skills/Skills";
const HomePage = () => {
    return (
        <div className='home'>
            <Name/>
            <About/>
            <Skills/>
        </div>
    )
}
export default HomePage