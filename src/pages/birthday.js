import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Birthday() {

const [cut,setCut] = useState(false)
const audioRef = useRef(null)
const navigate = useNavigate()

const cutCake = () => {

setCut(true)

if(audioRef.current){
audioRef.current.play()
}

}

return(

<div className="birthday-container">

<h1 className="birthday-title">🎉 Happy Birthday My Love 🎉</h1>

<p className="birthday-text">
Today is all about celebrating the most beautiful person in my life ❤️
</p>

<div className="cake-area">

<div className={`cake ${cut ? "cut" : ""}`}>
🎂
</div>

</div>

{!cut && (

<button className="cut-btn" onClick={cutCake}>
Cut the Cake 🎂
</button>

)}

{cut && (

<h2 className="celebrate-text">
Yayyy! Happy Birthday My Love ❤️🎉
</h2>

)}

<audio ref={audioRef} src="/happy-birthday.mp3" />

{/* Back to Home Button */}

<div style={{marginTop:"40px"}}>

<button
className="btn"
onClick={() => navigate("/menu")}
>
Back to Home 🏠
</button>

</div>

</div>

)

}

export default Birthday