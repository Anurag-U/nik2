import React from "react";
import { useNavigate } from "react-router-dom";

function Joke() {

  const navigate = useNavigate();

  return (
    <div className="page-container">

      <h1 className="title">😂 Thoda Sa Masti Time</h1>

      <div className="joke-card">

        <p className="joke-text">
          Kal raat mere boyfriend ne mujhe andhere mein daalne ki koshish ki… 👀
        </p>

        <p className="joke-text">
          Maine mana bhi kiya ki rehne do, andhera hai… light jala lo… 
        </p>

        <p className="joke-text">
          Par woh nahi maana aur aakhir zor laga ke tod hi baitha… 
        </p>

        <p className="joke-highlight">
          Kyuki suraakh galat tha… 
        </p>

        <p className="joke-ending">
          Andhere mein mobile mein charger ka pin lagana  
          bahut hi mushkil kaam hai! 
        </p>

      </div>

      <div className="nav-buttons">

        <button className="btn" onClick={() => navigate("/story")}>
          ← Back
        </button>

        <button className="btn" onClick={() => navigate("/letter")}>
          Next →
        </button>

      </div>

    </div>
  );
}

export default Joke;