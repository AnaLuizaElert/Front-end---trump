import './FirstPage.css';
import NavBar from '../../nav-bar/Nav';
import { Button } from 'react-bootstrap';

function FirstPage() {

    function changePath(){
        window.location.href = '/game-distribute-cards'
    }

    return (
        <>
        <NavBar/>
        <div id='background-game'>
            <div id='content-rules-game' className='container-content'>
                <div id='rules-game'>
                    <p>Are you ready to embark on a fruity adventure? Click 'Play' now and dive into the world of succulent flavors, where juicy surprises await! Let the fun begin!</p>
                </div>
                <Button id='button-start-game' onClick={changePath}>
                    Play
                </Button>
            </div>
        </div>

        </>
    );
}

export default FirstPage;