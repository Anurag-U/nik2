import { useNavigate } from "react-router-dom";

export default function Poem(){

const navigate = useNavigate()

return(

<div className="page-container">

<h1 className="title">A Poem For You ❤️</h1>

<div className="shayari-card">

<p className="shayari-text">

In a world full of millions of faces  
You became my favorite place.  
Every smile of yours feels like home,  
With you I never feel alone.

</p>

</div>

<div className="nav-buttons">

<button className="btn" onClick={()=>navigate("/menu")}>
Back
</button>

<button className="btn" onClick={()=>navigate("/shayari")}>
Next
</button>

</div>

</div>

)
}