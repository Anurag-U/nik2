import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Hi My Love ❤️</h1>

      <p >I made something special for you...</p>

      <button className="btn" onClick={() => navigate("/menu")}>
        I never thought you would become such a special part of my life , a part
        that feels completely irreplaceable. I never thought we would fight like
        cat and mouse and still somehow end up laughing together. I never
        thought I would receive that kind of special care and attention from
        someone the way you give it to me. I never thought your smile could have
        so much power, the power to crush every little crush I ever had, and the
        power to heal me even on my worst days. But slowly, without me even
        realizing it, you became someone my day depends on. Someone whose
        messages I wait for. Someone whose happiness matters more to me than my
        own mood. Every moment with you, the random talks, the small arguments,
        the silly jokes, the quiet moments — they all became memories I never
        want to lose. You didn’t just walk into my life. You became the most
        beautiful chapter of it. And if life keeps writing this story, I hope
        every page continues to have you in it.
      </button>
      <br />
      <button className="btn" onClick={() => navigate("/menu")}>
        Start Our Story ❤️
      </button>
    </div>
  );
}
