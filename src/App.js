import { Routes, BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/nav-bar/Nav';
import React from "react";
import Login from "./components/login/Login";
import RegisterCard from './components/register-card/register-card'; 
import RegisterPerson from './components/register-person/register-person';
import EditCard from './components/edit-card/edit-card';
import EditPerson from './components/edit-person/edit-person';
import DeleteCard from "./components/delete-card/delete-card";
import DeletePerson from "./components/delete-person/delete-person";
import ShowCards from "./components/show-cards/show-cards";
import ShowCard from "./components/show-card/show-card";
import Home from "./components/home/home";
import Game from "./components/game/game";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
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
