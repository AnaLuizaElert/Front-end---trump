//style
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//react
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
//pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import RegisterCard from "./pages/register-card/RegisterCard";
import RegisterPerson from "./pages/register-person/RegisterPerson";
import ShowCard from "./pages/show-card/ShowCard";
import ShowCards from "./pages/show-cards/ShowCards";
import EditCard from "./pages/edit-card/EditCard";
import EditPerson from "./pages/edit-person/EditPerson";
import DeleteCard from "./pages/delete-card/DeleteCard";
import DeletePerson from "./pages/delete-person/DeletePerson";

import FirstPage from "./pages/game/first-page/FirstPage";
import Profile from "./pages/profile/profile";
import GameRule from "./pages/game/game-rule/GameRule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register-card" element={<RegisterCard />} />
        <Route path="/register-person" element={<RegisterPerson />} />
        <Route path="/edit-card" element={<EditCard />} />
        <Route path="/edit-person" element={<EditPerson />} />
        <Route path="/delete-card" element={<DeleteCard />} />
        <Route path="/delete-person" element={<DeletePerson />} />
        <Route path="/show-cards" element={<ShowCards />} />
        <Route path="/show-card" element={<ShowCard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game-first-page" element={<FirstPage />} />
        <Route path="/game/:level" element={<GameRule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
