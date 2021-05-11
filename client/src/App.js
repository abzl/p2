import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Match from "./components/Match";
import Form from "./components/Stat"; 
import Nav from "./components/Nav";
import { baseURL, config } from "./services"
import './App.css';

function App() {
  const [matches, setMatches] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchMatches = async () => {
    const resp = await axios.get(baseURL, config);
      setMatches(resp.data.records);
    }
    fetchMatches(); 
  }, [])

  return (
    <div className="App">
      <h1>SoccerNet</h1>
      <Nav />
      <Route exact path="/">
        <main>
          {matches.map((match) => (
            <Match match={match}
              setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
      <Route path="/new">
        <h3>text2</h3>
      </Route>
      <Route path="/edit/:id">
        <h3>text3</h3>
      </Route>
    </div>
  );
}

export default App;
