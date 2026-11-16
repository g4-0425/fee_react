
import axios from "axios";
import { useState, useEffect } from "react";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(225px, 1fr))",
  gap: "1rem",
};

export function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title?.toLowerCase().includes(title.trim().toLowerCase())
  );

  const getMovies = async () => {
    try {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;

      if (!apiKey) {
        throw new Error("Missing TMDB API Key");
      }

      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            api_key: apiKey,
          },
        }
      );

      setMovies(res.data.results || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="hf bg71">
      <div className="bh5 p2 fxc jsb bg50">
        <h3>Movies App</h3>

        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search title..."
          className="w15"
        />

        <button>LogOut</button>
      </div>

      <main className="p2 mt2" style={style}>
        {filteredMovies.map((data) =>
          data.poster_path ? (
            <div key={data.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                width="100%"
              />
              <h3>{data.title}</h3>
              <p>⭐ {data.vote_average?.toFixed(1)}</p>
            </div>
          ) : null
        )}
      </main>
    </div>
  );
}
