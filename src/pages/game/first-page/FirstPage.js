import './FirstPage.css';
import '../../../utils/ButtonGame.css'
import NavBar from '../../../components/nav-bar/Nav';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function FirstPage() {
    const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <div id='background-game'>
                <div id='content-rules-game' className='container-content'>
                    <div id='rules-game'>
                        <p>Are you ready to embark on a fruity adventure? Click 'Play' now and dive into the world of succulent flavors, where juicy surprises await! Let the fun begin!</p>
                    </div>
                    <div className='levels-game'>
                        <Button className='button-start-game buttonGame' onClick={() => navigate("/game/easy")}>Easy</Button>
                        <Button className='button-start-game buttonGame' onClick={() => navigate("/game/normal")}>Normal</Button>
                        <Button className='button-start-game buttonGame' onClick={() => navigate("/game/hard")}>Hard</Button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default FirstPage;