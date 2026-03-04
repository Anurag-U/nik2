import React from "react";
import { useNavigate } from "react-router-dom";

export default function Video() {

  const navigate = useNavigate();

  return (
    <div className="page-container">

      <h1 className="title">🎬 Our Memories ❤️</h1>

      <div className="video-card">

        <iframe
          src="https://drive.google.com/file/d/1cYkOWzsIh8yfk2PunyRfrm6J3pWu33HB/preview"
          width="720"
          height="420"
          allow="autoplay"
          style={{ border: "none", borderRadius: "15px" }}
            title="YouTube video player"

        ></iframe>

      </div>

      <div className="nav-buttons">

        <button className="btn" onClick={() => navigate("/letter")}>
          ← Back
        </button>

        <button className="btn" onClick={() => navigate("/anniversary")}>
          Next →
        </button>

      </div>

    </div>
  );
}