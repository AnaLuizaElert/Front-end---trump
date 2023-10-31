//style
import "./profile.css";
//react
import React, { useEffect, useState } from "react";

//components
import NavBar from "../../components/nav-bar/Nav";

//service
import { UserService } from "../../service/UserService";

//images
import FruitSalat from "../../img/fruit-salat.png";

function Profile() {
  const [userName, setUserName] = useState("");
  const [victoryQty, setVictoryQty] = useState(0);
  const [lossesQty, setLossesQty] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    UserService.showOneByName(localStorage.getItem("user"))
      .then((response) => {
        setUserName(response.name);
        setVictoryQty(response.qtyVictories);
        setLossesQty(response.qtyLosses);
        setPoints(response.points);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="profile-container">
        <div className="profile-box profile-left-box">
          <div className="profile-box-name">
            <p className="profile-item-name profile-text profile-card-shadow">
              {userName}
            </p>
            <div className="profile-item-fruit">
              <div className="profile-pear"></div>
            </div>
          </div>
        </div>
        <div className="profile-box profile-right-box">
          <div className="profile-box-points profile-card-shadow">
            <img className="profile-item-image-salat" src={FruitSalat} />
            <div className="profile-item-points profile-card-shadow">
              <p className="profile-text">POINTS</p>
              <p className="profile-item-num-points">{points}</p>
            </div>
          </div>
          <div className="profile-box-status">
            <div className="profile-box-status-column">
              <p className="profile-item-circle profile-card-shadow">
                {victoryQty}
              </p>
              <p className="profile-item-name-status profile-text profile-card-shadow">
                victories
              </p>
            </div>
            <div className="profile-box-status-column">
              <p className="profile-item-circle profile-card-shadow">
                {lossesQty}
              </p>
              <p className="profile-item-name-status profile-text profile-card-shadow">
                losses
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
