import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../nik2", false, /\.(png|jpe?g|svg)$/)
);

function Anniversary() {

  const [index, setIndex] = useState(-1);
  const navigate = useNavigate();

  const photos = images.map((img) => ({
    src: img.default || img
  }));

  return (
    <div className="page-container">

      <h1 className="title">Happy One Year Anniversary ❤️</h1>

      <div className="insta-grid">

        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            alt=""
            loading="lazy"
            decoding="async"
            className="insta-img"
            onClick={() => setIndex(i)}
          />
        ))}

      </div>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />

      {/* Final Step Button */}
      <div style={{ marginTop: "40px" }}>
        <button
          className="btn"
          onClick={() => navigate("/birthday")}
        >
          Final Step ❤️
        </button>
      </div>

    </div>
  );
}

export default Anniversary; 