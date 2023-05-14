import { Link } from 'react-router-dom';
import Graph from "../Assets/NavGraph.svg";
import Recommendations from "../Assets/Recommendations.svg";
import Analyzer from "../Assets/Analyzer.svg";
import Calculator from "../Assets/Calculator.svg";
import Vitality from "../Assets/Vitality.svg";
import Insights from "../Assets/Insights.svg";
import "../CSS/NavGraph.css";

const NavGraph = () => {
    return (
        <section>
            <h2 className='side-text'>Explore Variety of Features</h2>
            <img src={Graph} alt="Navigation Graph" className='navgraph' />
            <Link to="/Recommendations" className='recommendations link'>
                <img src={Recommendations} alt = "Recommendations Button" className='red btn' />
            </Link>
            <Link to="/Analyzer" className='analyzer link'>
                <img src={Analyzer} alt = "Analyzer Button" className='yellow btn' />
            </Link>
            <Link to="/Calculator" className='calculator link'>
                <img src={Calculator} alt = "Calculator Button" className='blue btn' />
            </Link>
            <Link to="/Vitalities" className='vitality link'>
                <img src={Vitality} alt = "Vitality Button" className='green btn' />
            </Link>
            <Link to="/Insights" className='insights link'>
                <img src={Insights} alt = "Insights Button" className='grey btn' />
            </Link>
        </section>
    )
}

export default NavGraph;