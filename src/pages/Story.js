import React from "react";
import { useNavigate } from "react-router-dom";

function Story() {

  const navigate = useNavigate();

  return (
    <div className="page-container">

      <h1 className="title">📖  Story</h1>

      <div className="story-card">

        <p>
          Raat ke lagbhag <b>12 baj rahe the</b> jab Anurag ke phone par
          ek unknown number se message aaya.
        </p>

        <p className="message">“Tonight ghar mat jaana.”</p>

        <p>
          Anurag thoda confuse ho gaya. Usne aas-paas dekha.
          Sadak almost khaali thi, street lights halki-halki blink kar rahi thi
          aur hawa bhi thodi thandi chal rahi thi.
        </p>

        <p className="message">“Kaun ho tum?”</p>

        <p>
          Kuch seconds tak koi reply nahi aaya.
          Phir phone vibrate hua.
        </p>

        <p className="message">
          “Main koi hoon jo tumhe bahut achhe se jaanta hai.”
        </p>

        <p>
          Anurag ka dil thoda fast dhadakne laga.
        </p>

        <p className="message">
          “Agar jaante ho toh naam batao.”
        </p>

        <p className="message">“Abhi nahi.”</p>

        <p className="message">
          “Bas meri baat maan lo… koi tumhe dekh raha hai.”
        </p>

        <p>
          Anurag ne turant peeche mudkar dekha.
          Sadak bilkul khaali thi.
        </p>

        <p className="message">“Yeh koi prank hai kya?”</p>

        <p className="message">“Turn left.”</p>

        <p>
          Anurag thoda hesitate hua… par phir dheere se left mud gaya.
        </p>

        <p className="message">
          “Tumhe kaise pata main kaha hoon?”
        </p>

        <p className="message">
          “Kyunki main tumhe kaafi time se dekh rahi hoon.”
        </p>

        <p>
          Anurag ruk gaya.
        </p>

        <p className="message">
          “Matlab jab tum haste ho… jab tum tension me hote ho…
          jab tum pretend karte ho ki sab theek hai…
          aur jab tum kisi ko miss karte ho.”
        </p>

        <p>
          Ab Anurag ka dimaag aur confuse ho gaya.
        </p>

        <p className="message">
          “Eyes close karo aur socho…
          kaun hai jo tumhari sabse zyada care karta hai?”
        </p>

        <p>
          Anurag ne thoda socha.
          Uske dimaag me instantly ek hi naam aaya.
        </p>

        <p className="message">
          “Lagta hai tumhe answer mil gaya.”
        </p>

        <p className="final-line">
          “It’s me… <b>Niksha.</b> ❤️”
        </p>

        <p className="ending">
          Aur achanak Anurag ke face par smile aa gayi.
          Kyunki jo mysterious girl usse poori raat tease kar rahi thi,
          usse dara rahi thi, aur secretly uski care kar rahi thi…
          woh koi aur nahi <b>Niksha</b> thi.
        </p>

      </div>

      <div className="nav-buttons">

        <button className="btn" onClick={() => navigate("/shayari")}>
          ← Back
        </button>

        <button className="btn" onClick={() => navigate("/joke")}>
          Next →
        </button>

      </div>

    </div>
  );
}

export default Story;