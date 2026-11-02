
import "./App.css";

function App() {
  return (
    <div className="main">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <div className="card">

        <div className="top-label">
          ✨ WELCOME TO MY SPACE
        </div>

        <div className="avatar">
          S
          <span className="online"></span>
        </div>

        <h1>Hello World!</h1>

        <h2>I'm <span>Sumedha</span></h2>

        <div className="line"></div>

        <p>
          Welcome to my little corner of the internet.
          I'm glad you're here!
        </p>

        <div className="tags">
          <span>💻 Developer</span>
          <span>🌸 Creative Mind</span>
        </div>

        <button className="explore">
          Let's Explore <span>→</span>
        </button>

        <div className="footer">
          Made with 💜 by Sumedha
        </div>

      </div>
    </div>
  );
}

export default App;
