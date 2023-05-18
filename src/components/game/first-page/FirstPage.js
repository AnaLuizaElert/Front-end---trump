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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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