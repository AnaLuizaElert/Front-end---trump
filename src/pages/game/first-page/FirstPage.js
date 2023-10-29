//style
import "./FirstPage.css";
import "../../../utils/ButtonGame.css";
import { Button } from "react-bootstrap";

//react
import { useNavigate } from "react-router-dom";

//components
import NavBar from "../../../components/nav-bar/Nav";

function FirstPage() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div id="background-game">
        <div id="content-rules-game" className="container-content">
          <p id="rules-game">
            Are you ready to embark on a fruity adventure? Click 'Play' now and
            dive into the world of succulent flavors, where juicy surprises
            await! Let the fun begin!
          </p>
          <div className="levels-game">
            <Button
              className="button-start-game button-game"
              onClick={() => navigate("/game/easy")}
            >
              Easy
            </Button>
            <Button
              className="button-start-game button-game"
              onClick={() => navigate("/game/normal")}
            >
              Normal
            </Button>
            <Button
              className="button-start-game button-game"
              onClick={() => navigate("/game/hard")}
            >
              Hard
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstPage;
