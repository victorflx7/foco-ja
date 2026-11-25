import { useNavigate } from "react-router-dom";
import "../App.css";
import "../index.css";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";

function Dashboard() {
    return (
        <div className="flex text-center items-center justify-center min-h-screen">
    <h1 className="text-3x1 text-amber-950">Seja Bem Vindo a Dashboard do Foco Já!</h1>
    </div>
    )
}

export default Dashboard;