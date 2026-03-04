import { useNavigate } from "react-router-dom";

export default function Menu(){

const navigate = useNavigate()

return(

<div className="menu">

<h2>Choose Your Surprise 💌</h2>

<div className="grid">

<button onClick={()=>navigate("/poem")}>Poem</button>

<button onClick={()=>navigate("/shayari")}>Shayari</button>

<button onClick={()=>navigate("/story")}>Story</button>

<button onClick={()=>navigate("/joke")}>Joke</button>

<button onClick={()=>navigate("/letter")}>Letter</button>

<button onClick={()=>navigate("/video")}>Final Show</button>

<button onClick={()=>navigate("/anniversary")}>
Happy One Year Anniversary
</button>

</div>

</div>

)
}