import { useNavigate } from "react-router-dom";

export default function Poem(){

const navigate = useNavigate()

return(

<div className="page">

<h1>A Poem For You ❤️</h1>

<p>

In a world full of millions of faces  
You became my favorite place.  
Every smile of yours feels like home,  
With you I never feel alone.

</p>

<div className="buttons">

<button onClick={()=>navigate("/menu")}>
Back
</button>

<button onClick={()=>navigate("/shayari")}>
Next
</button>

</div>

</div>

)
}