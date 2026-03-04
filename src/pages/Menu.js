import { useNavigate } from "react-router-dom";

export default function Menu(){

const navigate = useNavigate()

const styles = {
  menu:{
    minHeight:"100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    background:"linear-gradient(135deg,#ff758c,#ff7eb3)",
    fontFamily:"Poppins, sans-serif",
    textAlign:"center",
    color:"white"
  },

  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(2,200px)",
    gap:"20px",
    marginTop:"30px"
  },

  button:{
    padding:"14px 20px",
    border:"none",
    borderRadius:"30px",
    background:"white",
    color:"#ff4d6d",
    fontSize:"16px",
    cursor:"pointer",
    transition:"0.3s",
    boxShadow:"0 8px 20px rgba(0,0,0,0.2)"
  }
}

return(

<div style={styles.menu}>

<h2>Choose Your Surprise 💌</h2>

<div style={styles.grid}>

<button style={styles.button} onClick={()=>navigate("/poem")}>Poem</button>

<button style={styles.button} onClick={()=>navigate("/shayari")}>Shayari</button>

<button style={styles.button} onClick={()=>navigate("/story")}>Story</button>

<button style={styles.button} onClick={()=>navigate("/joke")}>Joke</button>

<button style={styles.button} onClick={()=>navigate("/letter")}>Letter</button>

<button style={styles.button} onClick={()=>navigate("/video")}>Final Show</button>

<button style={styles.button} onClick={()=>navigate("/anniversary")}>
Happy One Year Anniversary
</button>

</div>

</div>

)
}