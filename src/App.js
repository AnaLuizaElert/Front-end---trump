import { Routes, BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import Login from "./components/login/Login";
import RegisterCard from './components/register-card/RegisterCard'; 
import RegisterPerson from './components/register-person/RegisterPerson';
import EditCard from './components/edit-card/EditCard';
import EditPerson from './components/edit-person/EditPerson';
import DeleteCard from "./components/delete-card/DeleteCard";
import DeletePerson from "./components/delete-person/DeletePerson";
import ShowCards from "./components/show-cards/ShowCards";
import ShowCard from "./components/show-card/ShowCard";
import Home from "./components/home/Home";
import Game from "./components/game/Game";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/register-card" element={<RegisterCard/>}/>
        <Route path="/register-person" element={<RegisterPerson/>}/>
        <Route path="/edit-card" element={<EditCard/>}/>
        <Route path="/edit-person" element={<EditPerson/>}/>
        <Route path="/delete-card" element={<DeleteCard/>}/>
        <Route path="/delete-person" element={<DeletePerson/>}/>
        <Route path="/show-cards" element={<ShowCards/>}/>
        <Route path="/show-card" element={<ShowCard/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
