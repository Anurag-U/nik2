import React from "react";
import { useNavigate } from "react-router-dom";

function Letter() {

  const navigate = useNavigate();

  return (
    <div className="page-container">

      <h1 className="title">💌 A Letter For You</h1>

      <div className="letter-card">

        <p className="letter-text">
          Dear Niksha,
        </p>

        <p className="letter-text">
          Kabhi socha nahi tha ki meri life mein koi aisa aayega
          jo itna special ban jayega. Tum sirf meri girlfriend nahi ho,
          tum meri aadat ho, meri khushi ho, aur meri life ka
          sabse beautiful part ho.
        </p>

        <p className="letter-text">
          Tumhare saath jo chhote chhote moments hote hain 
          momos wali date, random fights, late night talks,
          aur woh silly jokes yeh sab meri life ke
          sabse precious memories ban gaye hain.
        </p>

        <p className="letter-text">
          Kabhi kabhi lagta hai ki main lucky hoon
          ki tum meri life mein ho. Kyunki tumhare saath
          simple moments bhi special lagte hain.
        </p>

        <p className="letter-text">
          Shayad main perfect nahi hoon,
          par ek baat promise karta hoon 
          main hamesha tumhe smile karne ki
          wajah banne ki koshish karunga.
        </p>

        <p className="letter-text">
          Thank you meri life mein aane ke liye,
          aur meri life ko itna beautiful banane ke liye.
        </p>

        <p className="letter-ending">
          With love ❤️ <br/>
          Anurag
        </p>

      </div>

      <div className="nav-buttons">

        <button className="btn" onClick={() => navigate("/joke")}>
          ← Back
        </button>

        <button className="btn" onClick={() => navigate("/video")}>
          Next →
        </button>

      </div>

    </div>
  );
}

export default Letter;