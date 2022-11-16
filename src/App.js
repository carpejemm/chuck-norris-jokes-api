import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jokesData, setjokesData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`https://api.chucknorris.io/jokes/search?query=all`);
    setjokesData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
