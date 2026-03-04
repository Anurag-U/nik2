import React from "react";
import { useNavigate } from "react-router-dom";

function Shayari() {

  const navigate = useNavigate();

  return (
    <div className="page-container">

      <h1 className="title">💌 A Shayari For You</h1>

      <div className="shayari-card">

        <p className="shayari-text">
          Teri muskaan se hi shuru hoti hai meri har subah,<br/>
          Tere khayalon mein hi dhal jaati hai meri har shaam.<br/>
          Tu saath ho toh lagta hai sab kuch mil gaya,<br/>
          Warna is duniya mein adhura sa hai mera har armaan.
        </p>

        <p className="shayari-text">
          30 August ka woh din abhi bhi yaad hai mujhe,<br/>
          Jab momos ke bahane hum mile the pehli baar.<br/><br/>

          Na jaane kaise woh chhoti si mulaqat,<br/>
          Meri zindagi ki sabse khoobsurat yaad ban gayi.<br/><br/>

          Momos ka taste toh shayad bhool jaaunga ek din,<br/>
          Par us din teri muskaan kabhi nahi bhool paunga.<br/><br/>

          Us din samajh nahi aaya tha,<br/>
          Par aaj lagta hai…<br/><br/>

          Shayad meri kahani wahi se shuru hui thi,<br/>
          Jahan hum dono ek plate momos share kar rahe the ❤️
        </p>

      </div>

      <div className="nav-buttons">

        <button onClick={() => navigate("/menu")} className="btn">
          ← Back
        </button>

        <button onClick={() => navigate("/story")} className="btn">
          Next →
        </button>

      </div>

    </div>
  );
}

export default Shayari;